import expressSession from "express-session";
import MongoStore from "connect-mongo";

const store = new MongoStore({
  mongoUrl: process.env.DATABASE_URI,
  collectionName: "travelPlanner",
});

const enableSession = expressSession({
  store: store,
  secret: process.env.SESSION_KEY,
  resave: false, // Set resave option explicitly to false
  saveUninitialized: false,
  httpOnly: false,
  cookie: {
    path: "/",
    secure: false, // Set to true if using HTTPS
    httpOnly: true, // Cookie is inaccessible to client-side scripts
    maxAge: 86400000, // Cookie expiration time in milliseconds (e.g., 1 day)
  },
});

export { enableSession };
