
//USING prepared statements
// const Database = require("better-sqlite3")
// const db = new Database(process.env.DB_FILE); // This creates a file called db.sqlite in your root directory. It stores all your data. In a real project you should add it to your .gitignore so each team member can have their own local copy.
// console.log(db);

// const select_date = db.prepare("SELECT DATE()"); //For performance reasons all queries must first be “prepared” before they can be run. This way the library can re-use the same query over and over.
// const result = select_date.get() //Use .run when you don’t need a result (e.g. for deleting a row), .get when you expect a single row, and .all when you want to get all rows matching the query.
// console.log(result);

//Setting up SCHEMA's
const { readFileSync } = require("node:fs");
const { join } = require("node:path");
const Database = require("better-sqlite3");
/**
 * If we do not set DB_FILE env var creates an in-memory temp DB.
 * Otherwise connect to the DB contained in the file we specified (if it exists).
 * If it does not exist create a new DB file and connect to it.
 */
const db = new Database(process.env.DB_FILE);

/**
 * Make sure DB has the right structure by running schema.sql
 * This is responsible for creating the tables and columns we need
 * It should be safe to run every time
 */
const schemaPath = join("database", "schema.sql");
const schema = readFileSync(schemaPath, "utf-8");
db.exec(schema);

const select_table = db.prepare("SELECT name FROM sqlite_schema");
const result = select_table.all();
console.log(result);


module.exports = db;