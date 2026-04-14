import { Database } from "bun:sqlite";

export const db = new Database("tasks.sqlite");

// Initialize table
db.run("CREATE TABLE IF NOT EXISTS tasks (id INTEGER PRIMARY KEY AUTOINCREMENT, text TEXT)");