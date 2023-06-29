import "dotenv/config";
import express from "express";
import path from "node:path";
import { fileURLToPath } from "node:url";
import mongoose from "mongoose";
import { connectDB } from "./config/mongoConfig.js";
import { enableSession } from "./middleware/sessions.js";
import { auth } from "express-openid-connect";
import { oauth2Config } from "./config/oauth2Config.js";
import pkg from "express-openid-connect";
const { requiresAuth } = pkg;

// Routes
import registerRoute from "./routes/register.js";
import loginRoute from "./routes/login.js";
import logoutRoute from "./routes/logout.js";

// Protected Routes
import apiUsersRoute from "./routes/api/users.js";
import apiTrips from "./routes/api/trips.js";

const app = express();
const PORT = process.env.PORT || 3000;
const __dirname = path.dirname(fileURLToPath(import.meta.url));

//middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(enableSession);
app.use(auth(oauth2Config));
connectDB();

//Public Routes
app.use("/test", (req, res) => {
  console.log(req.oidc.user);
});
app.use("/register", registerRoute);
app.use("/loginstandard", loginRoute);
app.use("/logout", logoutRoute);
app.use("/", express.static(path.join(__dirname, "client"))); // static file resources
app.use("/js", express.static(path.join(__dirname, "client", "js")));

// Protected Routes
app.use("/api/users", apiUsersRoute);
app.use("/api/trips", apiTrips);

app.get("/profile", requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

// app.get("/", (req, res) => {
//   res.send(req.oidc.isAuthenticated() ? "Logged in" : "Logged out");
// });
// app.get("/profile", requiresAuth(), (req, res) => {
//   res.send(JSON.stringify(req.oidc.user));
// });

// Catch all 404
app.all("*", (req, res) => {
  if (req.accepts("html")) {
    res.status(404).sendFile(path.join(__dirname, "client", "404.html"));
  } else {
    res.status(404).json({ error: "404 Not found" });
  }
});

//After mongoose client opens a successfull connection to the database, check if it returns "open", and if so, run the callback below which turns on the server.
mongoose.connection.once("open", () => {
  console.log("Connected to MongoDB");
  app.listen(PORT, () => console.log(`server running on port ${PORT}`));
});
