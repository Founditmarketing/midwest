import 'dotenv/config';
import express from 'express';
import { createServer as createViteServer } from 'vite';
import handler from './api/chat.js';

async function createServer() {
  const app = express();
  app.use(express.json());

  // Use Vite middleware in middleware mode
  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'spa'
  });

  // Handle API route
  app.post('/api/chat', async (req, res) => {
    await handler(req, res);
  });

  app.use(vite.middlewares);

  app.listen(3002, () => {
    console.log('Server running at http://localhost:3002');
  });
}

createServer();
