import { OpenAI } from 'openai';

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY! });

export async function getEmbeddingsForChunks(chunks: string[]): Promise<number[][]> {
  const response = await openai.embeddings.create({
    model: 'text-embedding-3-small',
    input: chunks,
    encoding_format: 'float'
  });
  return response.data.map(e => e.embedding);
}