'use client';

import { useEffect, useState } from 'react';
import WebApp from '@twa-dev/sdk';

interface UserData {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
  language_code: string;
  is_premium: boolean;
}

export default function Home() {
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const user = WebApp?.initDataUnsafe?.user as UserData;
      if (user) {
        setUserData(user);
        WebApp.ready(); // important for Telegram to mark app as ready
      }
    }
  }, []);

  return (
    <main className="p-4">
      {userData ? (
        <>
          <h1 className="text-2xl font-bold mb-4">User Information</h1>
          <ul>
            <li><strong>ID:</strong> {userData.id}</li>
            <li><strong>First Name:</strong> {userData.first_name}</li>
            <li><strong>Last Name:</strong> {userData.last_name}</li>
            <li><strong>Username:</strong> {userData.username}</li>
            <li><strong>Language Code:</strong> {userData.language_code}</li>
            <li><strong>Is Premium:</strong> {userData.is_premium ? 'Yes' : 'No'}</li>
          </ul>
        </>
      ) : (
        <div>Loading...</div>
      )}
    </main>
  );
}
