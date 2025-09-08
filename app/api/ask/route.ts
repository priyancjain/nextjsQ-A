import { NextRequest, NextResponse } from 'next/server';
import { OpenAI } from 'openai';
import { getEmbeddingsForChunks } from '../../../lib/embeddings';
import { searchSimilarEmbeddings } from '../../../lib/vector';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

export async function POST(req: NextRequest) {
  const { question } = await req.json();
  const [questionEmbedding] = await getEmbeddingsForChunks([question]);
  const topChunks = searchSimilarEmbeddings(questionEmbedding);

  const context = topChunks.map((c, i) => `Source ${i + 1}:\n${c.text}`).join('\n\n');

  const prompt = `You are a helpful assistant. Answer the user's question strictly using the context below. If the context is insufficient, say \"I'm not sure based on the provided content.\" Do not make up information.\n\nContext:\n${context}\n\nQuestion: ${question}\n\nAnswer:`;

  const completion = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      { role: 'system', content: 'You are a strict PDF assistant that answers only from context.' },
      { role: 'user', content: prompt },
    ],
  });

  return NextResponse.json({
    answer: completion.choices[0].message.content,
    sources: topChunks.map(c => ({ text: c.text, source: c.source }))
  });
}
