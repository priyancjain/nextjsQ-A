'use client';
import { useState } from 'react';


export default function FileUploader({ onUpload }: { onUpload: () => void }) {
const [pdf, setPdf] = useState<File | null>(null);


const handleUpload = async () => {
if (!pdf) return;
const form = new FormData();
form.append('file', pdf);
await fetch('/api/upload', { method: 'POST', body: form });
onUpload();
};


return (
<div className="my-4">
<input type="file" onChange={(e) => setPdf(e.target.files?.[0] || null)} />
<button
onClick={handleUpload}
className="bg-blue-600 text-white px-4 py-2 rounded mt-2"
>
Upload PDF
</button>
</div>
);
}