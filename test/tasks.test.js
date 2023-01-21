const test = require("node:test");
const assert = require("node:assert");
const model = require("../model/tasks.js");
const db = require("../database/db.js");

// Delete all tasks and reset ID counter
function reset() {
  db.exec(/*sql*/ `
    DELETE FROM tasks;
    DELETE FROM sqlite_sequence WHERE name='tasks';
  `);
}

test("can create, remove & list tasks", () => {
  reset();

  const task = model.createTask({ content: "test task", complete: 0 });
  assert.equal(task.id, 1);
  assert.equal(task.content, "test task");

  model.removeTask(task.id);
  const tasks = model.listTasks();
  assert.equal(tasks.length, 0);
});

test("can update a task", () => {
  reset();

  const task = model.createTask({ content: "test task", complete: 0 });
  const updated = model.editTask({ id: 1, content: "this is updated" });
  assert.equal(updated.id, 1);
  assert.equal(updated.content, "this is updated");
});

test("can complete a task", () => {
  reset();

  const task = model.createTask({ content: "test task", complete: 0 });
  const updated = model.toggleTask(1);
  assert.equal(updated.complete, 1);
});