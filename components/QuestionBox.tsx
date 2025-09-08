'use client';
import { useState } from 'react';


export default function QuestionBox({ onAnswer }: { onAnswer: (question: string, answer: string, sources: any[]) => void }) {
const [question, setQuestion] = useState('');


const handleAsk = async () => {
const res = await fetch('/api/ask', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ question }),
});
const data = await res.json();
onAnswer(question, data.answer, data.sources || []);
setQuestion('');
};


return (
<div className="my-4">
<textarea
className="w-full p-2 border rounded"
rows={4}
value={question}
onChange={(e) => setQuestion(e.target.value)}
placeholder="Ask a question about the PDF..."
/>
<button
onClick={handleAsk}
className="bg-green-600 text-white px-4 py-2 rounded mt-2"
>
Ask
</button>
</div>
);
}

