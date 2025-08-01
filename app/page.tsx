'use client';

import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 text-white px-4">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          📚 Quiz Mini App
        </h1>
        <p className="text-lg md:text-xl text-white/90 max-w-md mx-auto">
          Choose your role to continue
        </p>

        <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
          <button
            onClick={() => router.push('/admin')}
            className="px-6 py-3 bg-white text-indigo-700 rounded-2xl font-semibold shadow-lg hover:bg-indigo-100 transition"
          >
            👩‍💼 Admin
          </button>

          <button
            onClick={() => router.push('/student')}
            className="px-6 py-3 bg-white text-purple-700 rounded-2xl font-semibold shadow-lg hover:bg-purple-100 transition"
          >
            🎓 Student
          </button>
        </div>
      </div>
    </main>
  );
}
