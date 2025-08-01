'use client';

export default function StudentLogin() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-white">
      <h2 className="text-2xl font-semibold mb-4">Student Login</h2>
      <form className="flex flex-col space-y-4 w-80">
        <input
          type="text"
          placeholder="Student ID or Username"
          className="p-3 border rounded-lg focus:outline-none focus:ring-2"
        />
        <button
          type="submit"
          className="bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
        >
          Continue
        </button>
      </form>
    </main>
  );
}
