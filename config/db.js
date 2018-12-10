const mongoose = require("mongoose");

const uri =
  "mongodb://abhi_madmax:abhi@190394@cluster0-shard-00-00-uauyv.mongodb.net:27017,cluster0-shard-00-01-uauyv.mongodb.net:27017,cluster0-shard-00-02-uauyv.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true";

const options = {
  reconnectTries: Number.MAX_VALUE,
  poolSize: 10
};

mongoose
  .connect(
    uri,
    { useNewUrlParser: true }
    
  )
  .then(
    () => {
      console.log("connected to db successfully");
    },
    err => {
      console.log("Error while connecting to db", err);
    }
  );

require("../models/category");
require("../models/task");
require("../models/entry");
