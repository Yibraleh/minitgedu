'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function StudentHome() {
  const [studentName, setStudentName] = useState<string | null>(null);

  useEffect(() => {
    const name = localStorage.getItem('studentName');
    if (name) {
      setStudentName(name);
    }
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-green-100 p-6 flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold text-green-700 mb-2">
        Welcome{studentName ? `, ${studentName}` : ''}!
      </h1>
      <p className="text-gray-600 text-lg mb-10">Choose what you'd like to do today</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl">
        <Link href="/student/quizzes">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition cursor-pointer text-center border border-green-200">
            <h2 className="text-2xl font-semibold text-green-600 mb-2">📚 Quizzes</h2>
            <p className="text-gray-500">Take quizzes and test your knowledge</p>
          </div>
        </Link>

        <Link href="/student/lessons">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition cursor-pointer text-center border border-blue-200">
            <h2 className="text-2xl font-semibold text-blue-600 mb-2">📝 Lessons</h2>
            <p className="text-gray-500">Review educational lessons</p>
          </div>
        </Link>

        <Link href="/student/resources">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition cursor-pointer text-center border border-purple-200">
            <h2 className="text-2xl font-semibold text-purple-600 mb-2">📂 Resources</h2>
            <p className="text-gray-500">Access materials and documents</p>
          </div>
        </Link>
      </div>
    </main>
  );
}
