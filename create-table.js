import { sql } from './db.js'

// sql`DROP TABLE IF EXISTS videos`.then(() => {
//   console.log('table deleted')
// })

sql`
  CREATE TABLE videos (
    id TEXT PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    duration INTEGER
  );
`.then(() => {
  console.log('table created')
})