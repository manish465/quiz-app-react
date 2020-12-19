const express = require("express");
const app = express();
const PORT = 8000;
const admin = require("firebase-admin");
const serviceAccount = require("./quiz-app-8c45b-firebase-adminsdk-3h2rf-c1331d11c0.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://quiz-app-8c45b-default-rtdb.firebaseio.com",
});

const db = admin.database();
const userRef = db.ref("users");

app.get("/", (res, req) => {
    req.send("Hello World");
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
