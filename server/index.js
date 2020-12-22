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
const testRef = db.ref("tests");

app.post("/api/tests", (req, res) => {
    const test = testRef.child(req.body.testCode);
    test.push(req.body, (err) => {
        err ? res.status(300) : res.status(200);
    });
});

app.listen(port, () => console.log(`listening on port ${port}`));
