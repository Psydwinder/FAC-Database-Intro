const Database = require("better-sqlite3")
const db = new Database(process.env.DB_FILE); // This creates a file called db.sqlite in your root directory. It stores all your data. In a real project you should add it to your .gitignore so each team member can have their own local copy.
console.log(db);

const select_date = db.prepare("SELECT DATE()"); //For performance reasons all queries must first be “prepared” before they can be run. This way the library can re-use the same query over and over.
const result = select_date.get() //Use .run when you don’t need a result (e.g. for deleting a row), .get when you expect a single row, and .all when you want to get all rows matching the query.
console.log(result);