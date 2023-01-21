const express = require("express");
const model = require("./model/tasks.js");

const server = express();


server.get("/", (req, res) => {
    const tasks = model.listTasks();
    const body = /*html*/ `
      <!doctype html>
      <form method="POST">
        <input id="content" name="content" aria-label="New task" required>
        <button>Add task +</button>
      </form>
      <ul>${tasks.map((t) => `<li>${t.content}</li>`).join("")}</ul>
    `;
    res.send(body);
  });
 


  server.post("/update", express.urlencoded({ extended: false }), (req, res) => {
    const { action, id } = req.body;
    if (action === "remove") model.removeTask(id);
    if (action === "toggle") model.toggleTask(id);
    res.redirect("/");
  });

module.exports = server;