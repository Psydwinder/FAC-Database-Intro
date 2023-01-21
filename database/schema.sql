/*
BEGIN;

CREATE TABLE IF NOT EXISTS tasks ( 
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  content TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
); /*A simple schema is a collection of CREATE TABLE statements that you run against your database to create the tables and columns it needs. You could write all this inside strings in a .js file, but it’s nicer to use a separate .sql file.*/

/*
COMMIT;
*/

/*AMMEDNING the schema*/
CREATE TABLE IF NOT EXISTS tasks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  content TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  complete INTEGER DEFAULT 0 CHECK(complete IN (0, 1))
);

/*SQLite does not support booleans natively. Instead you must use integers (0 is false, 1 is true). You can enforce this constraint by using DEFAULTS and CHECK to make sure that the column can only ever be 0 or 1.*/