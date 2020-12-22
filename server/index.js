const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const port = process.env.PORT || 8000;

const admin = require("firebase-admin");

const serviceAccount = require("./quize-app-b6d1f-firebase-adminsdk-4hljw-db9f4734b9.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://quize-app-b6d1f-default-rtdb.firebaseio.com",
});

app.use(bodyParser.json());
app.use(cors());

const db = admin.database();
const ref = db.ref("test");

app.get("/", (req, res) => {});

app.get("/api/tests", (req, res) => {
    res.send(ref.get());
});

app.post("/api/tests", (req, res) => {
    ref.set(req.body);
});

app.listen(port, () => console.log(`listening on port ${port}`));
