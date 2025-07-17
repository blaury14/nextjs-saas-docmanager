import { useState } from 'react';
import { useRouter } from 'next/router';

const USERS = {
  superadmin: { password: 'admin123', role: 'Superadmin' },
  admin: { password: 'admin123', role: 'Admin' },
  user: { password: 'user123', role: 'User' }
};

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const user = USERS[username];
    if (user && user.password === password) {
      localStorage.setItem('user', JSON.stringify({ username, role: user.role }));
      router.push('/dashboard');
    } else {
      setError('Credenciales inválidas');
    }
  };

  return (
    <div style={{ fontFamily: 'sans-serif', display: 'flex', height: '100vh', alignItems: 'center', justifyContent: 'center' }}>
      <form onSubmit={handleLogin} style={{ width: 320, padding: 30, border: '1px solid #ccc', borderRadius: 10 }}>
        <h2 style={{ textAlign: 'center', marginBottom: 20 }}>Iniciar Sesión</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <input
          placeholder="Usuario"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ width: '100%', marginBottom: 10, padding: 8 }}
        />
        <input
          placeholder="Contraseña"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: '100%', marginBottom: 10, padding: 8 }}
        />
        <button type="submit" style={{ width: '100%', padding: 10, backgroundColor: '#0070f3', color: 'white', border: 'none', borderRadius: 4 }}>
          Entrar
        </button>
      </form>
    </div>
  );
}