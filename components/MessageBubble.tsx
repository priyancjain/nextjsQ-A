export default function MessageBubble({ sender, text }: { sender: 'user' | 'bot'; text: string }) {
const isUser = sender === 'user';
return (
<div className={`my-2 flex ${isUser ? 'justify-end' : 'justify-start'}`}>
<div className={`max-w-md px-4 py-2 rounded-lg text-white whitespace-pre-line ${isUser ? 'bg-blue-600' : 'bg-gray-700'}`}>
{text}
</div>
</div>
);
}