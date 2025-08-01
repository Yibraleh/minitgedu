'use client';

import { useEffect } from 'react';
import WebApp from '@twa-dev/sdk';

export default function Home() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      WebApp.ready(); // Let Telegram know the app is ready
      WebApp.expand(); // Optional: make it full height
    }
  }, []);

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      <h1 className="text-3xl font-bold text-center mb-6">
        Welcome to the Quiz App
      </h1>

      <p className="text-lg mb-8 text-gray-700 text-center">
        Choose your role to continue:
      </p>

      <div className="flex gap-4">
        <button
          onClick={() => window.location.href = '/admin'}
          className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl shadow-md"
        >
          I’m an Admin
        </button>

        <button
          onClick={() => window.location.href = '/student'}
          className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl shadow-md"
        >
          I’m a Student
        </button>
      </div>
    </main>
  );
}
