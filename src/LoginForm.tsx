import { useState, type FormEvent } from 'react';

const labelStyle = { display: 'block', marginTop: '1rem', fontWeight: 500 };
const inputStyle = {
  width: '100%',
  padding: '0.6rem 0.75rem',
  marginTop: '0.4rem',
  border: '1px solid #ccc',
  borderRadius: 6,
  fontSize: '1rem',
  boxSizing: 'border-box' as const,
};
const btnStyle = {
  marginTop: '1.5rem',
  width: '100%',
  padding: '0.7rem',
  borderRadius: 6,
  border: 'none',
  background: '#2b6cb0',
  color: 'white',
  fontSize: '1rem',
  cursor: 'pointer',
};

export function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [result, setResult] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setResult(null);
    const resp = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: email.toLowerCase(), password }),
    });
    const json = await resp.json();
    setResult(resp.ok ? `OK: ${json.message}` : `ERR: ${json.error ?? 'unknown'}`);
  }

  return (
    <form onSubmit={handleSubmit} aria-label="login form">
      <label style={labelStyle}>
        Email
        <input
          type="email"
          autoCapitalize="none"
          inputMode="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={inputStyle}
          data-testid="email-input"
        />
      </label>
      <label style={labelStyle}>
        Password
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={inputStyle}
          data-testid="password-input"
        />
      </label>
      <button type="submit" style={btnStyle} data-testid="submit-btn">
        Sign in
      </button>
      {result && (
        <p data-testid="result" style={{ marginTop: '1rem', color: result.startsWith('OK') ? '#22863a' : '#cb2431' }}>
          {result}
        </p>
      )}
    </form>
  );
}
