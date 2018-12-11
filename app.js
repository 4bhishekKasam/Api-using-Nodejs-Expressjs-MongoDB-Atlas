const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const MongoClient = require("mongodb").MongoClient;
const cors = require("cors");
const mongoose = require("mongoose");
//const taskController = require("./controllers/TaskController");
//const categoryController = require("./controllers/CategoryController");
//const entryController = require("./controllers/EntryController");

const dbURI =
  "mongodb://abhi_madmax:abhi190394@cluster0-shard-00-00-1xohs.mongodb.net:27017,cluster0-shard-00-01-1xohs.mongodb.net:27017,cluster0-shard-00-02-1xohs.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";

const app = express();
const port = parseInt(process.env.PORT || 8080);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const options = {
  reconnectTries: Number.MAX_VALUE,
  poolSize: 10
};

mongoose
  .connect(
    dbURI,
    options
  )
  .then(
    () => {
      console.log("Database connection established!");
    },
    err => {
      console.log("Error connecting Database instance due to: ", err);
    }
  );

require("./models/task");

app.listen(port, () => {
  console.log("connected to localhost port:" + port);
});
