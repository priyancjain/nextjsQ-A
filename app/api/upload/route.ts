import { NextRequest, NextResponse } from 'next/server';
import { extractTextFromPDF } from '../../../lib/pdf';
import { getEmbeddingsForChunks } from '../../../lib/embeddings';
import { saveToVectorStore } from '../../../lib/vector';
import { randomUUID } from 'crypto';

export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const file = formData.get('file') as File;
  const buffer = Buffer.from(await file.arrayBuffer());

  const text = await extractTextFromPDF(buffer);
  const chunks = text.match(/(.|\n){1,500}/g) || [];

  const embeddings = await getEmbeddingsForChunks(chunks);
  const records = chunks.map((text, i) => ({
    id: randomUUID(),
    text,
    embedding: embeddings[i],
    source: `chunk ${i + 1}`,
  }));

  saveToVectorStore(records);

  return NextResponse.json({ message: 'PDF processed and stored.' });
}
