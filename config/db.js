const mongoose = require("mongoose");

const dbURI =
  "mongodb://abhi_madmax:abhi190394@cluster0-shard-00-00-1xohs.mongodb.net:27017,cluster0-shard-00-01-1xohs.mongodb.net:27017,cluster0-shard-00-02-1xohs.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";

const options = {
  reconnectTries: Number.MAX_VALUE,
  poolSize: 10
};

mongoose
  .connect(
    dbURI,
    { useNewUrlParser: true }
  )
  .then(
    () => {
      console.log("Database connection established!");
    },
    err => {
      console.log("Error connecting Database instance due to: ", err);
    }
  );

require("../models/category");
require("../models/task");
require("../models/entry");
