import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Dashboard() {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem('user');
    if (!stored) {
      router.push('/');
    } else {
      setUser(JSON.parse(stored));
    }
  }, []);

  return (
    <div style={{ padding: 30 }}>
      <h1>Dashboard</h1>
      {user && (
        <p>Bienvenido {user.username} ({user.role})</p>
      )}
    </div>
  );
}