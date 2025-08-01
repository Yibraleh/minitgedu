'use client';

export default function AdminLogin() {
  return (
    <main className="flex flex-col items-center justify-center h-screen bg-white">
      <h2 className="text-2xl font-semibold mb-4">Admin Login</h2>
      <form className="flex flex-col space-y-4 w-80">
        <input
          type="text"
          placeholder="Username"
          className="p-3 border rounded-lg focus:outline-none focus:ring-2"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 border rounded-lg focus:outline-none focus:ring-2"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </main>
  );
}
