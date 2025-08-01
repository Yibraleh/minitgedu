'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function StudentLoginPage() {
  const [name, setName] = useState('');
  const router = useRouter();

  const handleLogin = () => {
    if (name.trim()) {
      localStorage.setItem('studentName', name);
      router.push('/student/home');
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-50 to-green-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-sm">
        <h1 className="text-2xl font-bold text-green-700 mb-6 text-center">Student Login</h1>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-xl mb-4 focus:outline-none focus:ring-2 focus:ring-green-400"
        />
        <button
          onClick={handleLogin}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition"
        >
          Login
        </button>
      </div>
    </main>
  );
}
