import { Elysia } from 'elysia';
import { staticPlugin } from '@elysiajs/static';
import { apiRoutes } from './routes';

const app = new Elysia()
  // 1. Expose the public folder for static assets
  .use(staticPlugin()) 
  
  // 2. Explicitly send the HTML file when visiting the home page
  .get('/', () => Bun.file('public/index.html'))
  
  // 3. Attach the API routes
  .use(apiRoutes)
  
  .listen(process.env.PORT || 3000);

console.log(`🚀 Clean Architecture Server running at http://localhost:${app.server?.port}`);