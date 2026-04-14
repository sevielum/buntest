import { Elysia } from 'elysia';
import { db } from './db';

// Create a router instance with an '/api' prefix
export const apiRoutes = new Elysia({ prefix: '/api' })
  .get("/tasks", () => {
    return db.query("SELECT * FROM tasks").all();
  })
  .post("/tasks", ({ body }) => {
    const { text } = body as { text: string };
    db.run("INSERT INTO tasks (text) VALUES (?)", [text]);
    return { success: true };
  })
  .delete("/tasks/:id", ({ params: { id } }) => {
    db.run("DELETE FROM tasks WHERE id = ?", [id]);
    return { success: true };
  });