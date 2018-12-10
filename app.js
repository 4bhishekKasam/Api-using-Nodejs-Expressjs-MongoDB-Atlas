const express = require("express");
const bodyParser = require("body-parser");
const taskController = require("./controllers/TaskController");
//const categoryController = require("./controllers/CategoryController");
//const entryController = require("./controllers/EntryController");

require("./config/db");

const app = express();

const port = process.env.PORT || 3301;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//task routes
app
  .route("/tasks")
  .get(taskController.listTasks)
  .post(taskController.createTask);

//-----------

app.listen(port, () => {
  console.log("connected on localhost port :" + port);
});
