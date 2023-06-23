import "dotenv/config";
import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import mongoose from "mongoose";
import { connectDB } from "./config/mongoConfig.js";
import { enableSession } from "./middleware/sessions.js";

// Routes
import registerRoute from "./routes/register.js";
import loginRoute from "./routes/login.js";
import logoutRoute from "./routes/logout.js";

// Protected Routes
import apiUsersRoute from "./routes/api/users.js";

const app = express();
const PORT = process.env.PORT || 3001;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(enableSession);
connectDB();

//Public Routes
app.use("/register", registerRoute);
app.use("/login", loginRoute);
app.use("/logout", logoutRoute);
app.use("/", express.static(path.join(__dirname, "client"))); // static file resources
app.use("/js", express.static(path.join(__dirname, "client", "js")));

// Protected Routes
app.use("/api/users", apiUsersRoute);

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
