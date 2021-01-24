const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const url = "mongodb://localhost:27017/testappdb";

const authRoute = require("./routes/Auth");

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(bodyParser.json());
app.use(cors());

app.use("/api/users", authRoute);

mongoose.connection.on("open", () => console.log("connected to DB"));
app.listen(8000, () => console.log("server is up and running "));
