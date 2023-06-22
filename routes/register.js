const express = require("express");
const router = express.Router();
const usersController = require("../controllers/usersController");

router.post("/", (request, resonse) => {
  console.log("Router Works");
  response.json({ message: "it works" });
});

module.exports = router;
