//USING our DATABASE
const db = require("../database/db.js");

// const insert_task = db.prepare("INSERT INTO tasks (content) VALUES (?)");

// function createTask(content) {
//   insert_task.run(content);
// }

// createTask("Eat a banana");
// const tasks = db.prepare("SELECT * FROM tasks").all();
// console.log(tasks);

// module.exports = { createTask };

//RETURNING generated data

// const db = require("../database/db.js");

// const insert_task = db.prepare(`
//   INSERT INTO tasks (content)
//   VALUES (?)
//   RETURNING id, content, created_at
// `);

// function createTask(content) {
//   return insert_task.get(content);
// }

// const result = createTask("Send mum flowers");
// console.log(result);

// module.exports = { createTask };

//NAMED SQL parameters

// const db = require("../database/db.js");

// const insert_task = db.prepare(`
//   INSERT INTO tasks (content, complete)
//   VALUES ($content, $complete)
//   RETURNING id, content, created_at
// `);

// function createTask(task) {
//     return insert_task.get(task);
//   }

//   module.exports = { createTask };

// //LISTING Rows
// const db = require("../database/db.js");

//   const select_tasks = db.prepare(/*sql*/ `
//   SELECT id, content, created_at, complete FROM tasks
// `);

// function listTasks() {
//   return select_tasks.all();
// }  

// module.exports = { listTasks };

//FORMATTING columns

// const select_tasks = db.prepare(/*sql*/ `
//   SELECT
//     id,
//     content,
//     TIME(created_at),
//     complete
//   FROM tasks
// `);

// const result = createTask("Send mum flowers");
// console.log(result);

// function listTasks() {
//     return select_tasks.all();
//   }  

// module.exports = { listTasks };

//DELETING a row

// const delete_task = db.prepare(/*sql*/ `
//   DELETE FROM tasks WHERE id = ?
// `);

// function removeTask(id) {
//   delete_task.run(id);
// }

// removeTask(1);

// function listTasks() {
// return select_tasks.all();
// }  
    
// module.exports = { listTasks };

//UPDATIG a row

// const update_content = db.prepare(/*sql*/ `
//   UPDATE tasks
//   SET content = $content
//   WHERE id = $id
//   RETURNING id, content, created_at, complete
// `);

// function editTask(task) {
//   return update_content.get(task);
// }

//TOGGLING a boolean
// const update_complete = db.prepare(/*sql*/ `
//   UPDATE tasks
//   SET complete = NOT complete
//   WHERE id = ?
//   RETURNING id, content, created_at, complete
// `);

// function toggleTask(id) {
//   return update_complete.get(id);
// }