require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const connectDB = require("./config/mongoConfig");
const PORT = process.env.PORT || 3001;
// const enableSession = require("./middleware/session");

//middleware

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
// app.use(enableSession);
connectDB();

// mongoClient
//   .connect()
//   .then((_) => {
//     const db = mongoClient.db("test");
//     testCollection = db.collection("test");
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// app.get("/api/test", (_, response) => {
//   testCollection
//     .find()
//     .toArray()
//     .then((result) => {
//       response.json(result);
//     });
// });

// app.post("/api/test", (request, response) => {
//   testCollection.insertOne(request.body).then((_) => {
//     response.json();
//   });
// });

app.use("/", express.static(path.join(__dirname, "client"))); // static file resources
app.use("/js", express.static(path.join(__dirname, "views", "js")));

//After mongoose client opens a successfull connection to the database, check if it returns "open", and if so, run the callback below which turns on the server.
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`server running on port ${PORT}`));
});
