import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

const apiMockPlugin = () => ({
  name: 'api-mock-plugin',
  configureServer(server) {
    server.middlewares.use(async (req, res, next) => {
      const isApiRoute = req.url === '/api/chat' || req.url === '/api/send-email';
      if (isApiRoute && req.method === 'POST') {
        // Parse JSON body like Vercel does automatically
        let body = '';
        req.on('data', chunk => {
          body += chunk.toString();
        });
        req.on('end', async () => {
          try {
            // Mock Vercel Edge Request Object
            const webReq = {
              method: req.method,
              json: async () => body ? JSON.parse(body) : {}
            } as any;
            
            const modulePath = req.url === '/api/chat' ? '/api/chat.ts' : '/api/send-email.ts';
            const handler = await server.ssrLoadModule(modulePath);
            const webRes = await handler.default(webReq);

            if (webRes && webRes.body) {
               const contentType = webRes.headers.get('content-type') || '';
               res.writeHead(webRes.status || 200, Object.fromEntries(webRes.headers.entries()));
               if (contentType.includes('text/event-stream')) {
                 const reader = webRes.body.getReader();
                 const processStream = async () => {
                   while (true) {
                     const { done, value } = await reader.read();
                     if (done) {
                       res.end();
                       break;
                     }
                     res.write(value);
                   }
                 };
                 processStream();
               } else {
                 const text = await webRes.text();
                 res.end(text);
               }
            } else {
               res.statusCode = webRes?.status || 200;
               const text = webRes ? await webRes.text() : '';
               res.setHeader('Content-Type', 'application/json');
               res.end(text);
            }
          } catch (e: any) {
            console.error('API Error:', e);
            res.statusCode = 500;
            res.end(JSON.stringify({ error: e.message }));
          }
        });
      } else {
        next();
      }
    });
  }
});

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  process.env.GEMINI_API_KEY = env.GEMINI_API_KEY || process.env.GEMINI_API_KEY;
  process.env.RESEND_API_KEY = env.RESEND_API_KEY || process.env.RESEND_API_KEY;

  return {
    plugins: [react(), tailwindcss(), apiMockPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modifyâfile watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
