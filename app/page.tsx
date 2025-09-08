'use client';
import { useState } from 'react';
import FileUploader from '../components/FileUploader';
import QuestionBox from '../components/QuestionBox';
import MessageBubble from '../components/MessageBubble';

export default function Home() {
  const [chatHistory, setChatHistory] = useState<{ sender: 'user' | 'bot', text: string }[]>([]);

  const handleNewQA = (question: string, answer: string) => {
    setChatHistory(prev => [
      ...prev,
      { sender: 'user', text: question },
      { sender: 'bot', text: answer }
    ]);
  };

  return (
    <main className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">Mini PDF Q&A Chat</h1>

      <FileUploader onUpload={() => alert('PDF uploaded and processed!')} />

      <div className="my-4 space-y-2">
        {chatHistory.map((msg, idx) => (
          <MessageBubble key={idx} sender={msg.sender} text={msg.text} />
        ))}
      </div>

      <QuestionBox onAnswer={handleNewQA} />
    </main>
  );
}
