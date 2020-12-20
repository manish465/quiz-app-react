const express = require("express");
const app = express();
const PORT = 8000;

var admin = require("firebase-admin");

var serviceAccount = require("./quize-app-b6d1f-firebase-adminsdk-4hljw-db9f4734b9.json");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://quize-app-b6d1f-default-rtdb.firebaseio.com",
});

var db = admin.database();
var ref = db.ref("users");

ref.set({
    id: 3,
});

app.listen(PORT, () => console.log(`listening on port ${PORT}`));
