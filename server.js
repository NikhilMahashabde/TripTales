require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const connectDB = require("./config/mongoConfig");
const PORT = process.env.PORT || 3001;
const enableSession = require("./middleware/session");

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(enableSession);
connectDB();

//Public Routes
app.use("/register", require("./routes/register"));
app.use("/login", require("./routes/login"));
app.use("/logout", require("./routes/logout"));
app.use("/", express.static(path.join(__dirname, "client"))); // static file resources
app.use("/js", express.static(path.join(__dirname, "client", "js")));

// Protected Routes
app.use("/api/users", require("./routes/api/users"));

// Catch all 404
app.all("*", (req, res) => {
  if (req.accepts("html")) {
    res.sendStatus(404).sendFile(path.join(__dirname, "client", "404.html"));
  } else {
    res.sendStatus(404).json({ error: "404 Not found" });
  }
});

//After mongoose client opens a successfull connection to the database, check if it returns "open", and if so, run the callback below which turns on the server.
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`server running on port ${PORT}`));
});
