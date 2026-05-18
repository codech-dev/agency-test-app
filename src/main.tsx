import React from 'react';
import ReactDOM from 'react-dom/client';
import { LoginForm } from './LoginForm';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <main style={{ fontFamily: 'system-ui, sans-serif', maxWidth: 360, margin: '4rem auto', padding: '0 1rem' }}>
      <h1 style={{ marginBottom: '1.5rem' }}>Agency Test App</h1>
      <LoginForm />
    </main>
  </React.StrictMode>,
);
