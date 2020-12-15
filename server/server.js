const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const port = 8000 || process.env.PORT;
const bodyParser = require("body-parser");

require("dotenv/config");

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Hello World");
});

server.listen(port, () => console.log(`server is running on ${port}`));
