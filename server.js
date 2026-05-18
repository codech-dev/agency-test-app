import express from 'express';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = Number(process.env.PORT ?? 3000);

app.use(express.json());

app.post('/api/login', (req, res) => {
  const { email, password } = req.body ?? {};
  if (typeof email !== 'string' || typeof password !== 'string') {
    return res.status(400).json({ error: 'email and password required' });
  }
  if (email !== email.toLowerCase()) {
    return res.status(400).json({ error: 'email must be lowercase' });
  }
  if (email === 'user@example.com' && password === 'hunter2') {
    return res.json({ message: 'welcome' });
  }
  return res.status(401).json({ error: 'invalid credentials' });
});

app.get('/healthz', (_req, res) => res.json({ ok: true }));

app.use(express.static(path.join(__dirname, 'dist')));
app.get('*', (_req, res) => res.sendFile(path.join(__dirname, 'dist', 'index.html')));

app.listen(PORT, () => console.log(`agency-test-app listening on :${PORT}`));
