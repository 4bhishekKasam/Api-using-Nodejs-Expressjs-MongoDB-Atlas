const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const taskController = require("./controllers/TaskController");
const categoryController = require("./controllers/CategoryController");
//const entryController = require("./controllers/EntryController");

require("./config/db");

const app = express();
const port = parseInt(process.env.PORT || 8080);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ENDPOINTS TASKS --------
app
  .route("/tasks")
  .get(taskController.listTasks)
  .post(taskController.createTask);

app
  .route("/tasks/:taskid")
  .get(taskController.readTask)
  .put(taskController.updateTask)
  .delete(taskController.deleteTask);

// ENDPOINTS CATEGORY --------
app
  .route("/category")
  .get(categoryController.listCategories)
  .post(categoryController.createCategory);

app
  .route("/category/:categoryid")
  .get(categoryController.readCategory)
  .put(categoryController.updateCategory)
  .delete(categoryController.deleteCategory);

//---------------------------------------

require("./models/category");
require("./models/task");
require("./models/entry");

app.listen(port, () => {
  console.log("connected to localhost port:" + port);
});
