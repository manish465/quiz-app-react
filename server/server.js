const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const port = 8000 || process.env.PORT;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv/config");

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});

mongoose.connect(
    process.env.URL,
    { useNewUrlParser: true },
    { useUnifiedTopology: true },
    () => console.log("Connection established"),
);

server.listen(port, () => console.log(`server is running on ${port}`));
