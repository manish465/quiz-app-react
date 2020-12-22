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

app.get("/api/tests", (req, res) => {
    testRef.once("value").then((snap) => {
        res.send(snap.val());
    });
});

app.get("/api/tests/:id", (req, res) => {
    testRef
        .orderByChild("testCode")
        .equalTo(req.params.id)
        .once("value", (snap) => {
            if (snap.val()) {
                res.send(snap.val());
            } else {
                res.send(null);
            }
        });
});

app.post("/api/tests", (req, res) => {
    const singleTest = testRef.child(req.body.testCode);
    singleTest.set(req.body);
});

app.listen(port, () => console.log(`listening on port ${port}`));
