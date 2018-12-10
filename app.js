const express = require("express");
const bodyParser = require("body-parser");

require("./config/db");

const app = express();

const port = process.env.PORT || 3301;
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log("connected on localhost port :" + port);
});
