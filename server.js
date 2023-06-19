const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3001;

const { MongoClient } = require("mongodb");
const mongoClient = new MongoClient(process.env.MONGO_DB_CONNECTION_STRING);
let testCollection;

mongoClient
  .connect()
  .then((_) => {
    const db = mongoClient.db("test");
    testCollection = db.collection("test");
  })
  .catch((error) => {
    console.log(error);
  });

app.use(express.json());

app.get("/", (_, response) => {
  response.json({ server: "is alive" });
});

app.get("/api/test", (_, response) => {
  testCollection
    .find()
    .toArray()
    .then((result) => {
      response.json(result);
    });
});

app.post("/api/test", (request, response) => {
  testCollection.insertOne(request.body).then((_) => {
    response.json();
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
