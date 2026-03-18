import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

const apiMockPlugin = () => ({
  name: 'api-mock-plugin',
  configureServer(server) {
    server.middlewares.use(async (req, res, next) => {
      if (req.url === '/api/chat' && req.method === 'POST') {
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
            
            const handler = await server.ssrLoadModule('/api/chat.ts');
            const webRes = await handler.default(webReq);

            if (webRes && webRes.body) {
               res.writeHead(webRes.status || 200, Object.fromEntries(webRes.headers.entries()));
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
               res.statusCode = webRes?.status || 200;
               res.end();
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
