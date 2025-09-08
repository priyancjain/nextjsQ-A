export interface VectorRecord {
  id: string;
  text: string;
  embedding: number[];
  source?: string;
}

const store: VectorRecord[] = [];

export function saveToVectorStore(records: VectorRecord[]) {
  store.push(...records);
}

export function searchSimilarEmbeddings(queryEmbedding: number[], topK = 5): VectorRecord[] {
  function cosineSimilarity(a: number[], b: number[]): number {
    const dot = a.reduce((sum, ai, i) => sum + ai * b[i], 0);
    const normA = Math.sqrt(a.reduce((sum, ai) => sum + ai * ai, 0));
    const normB = Math.sqrt(b.reduce((sum, bi) => sum + bi * bi, 0));
    return dot / (normA * normB);
  }

  return store
    .map(r => ({ ...r, score: cosineSimilarity(queryEmbedding, r.embedding) }))
    .sort((a, b) => b.score - a.score)
    .slice(0, topK);
}
