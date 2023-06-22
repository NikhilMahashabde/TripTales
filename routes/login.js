const express = require("express");
const router = express.Router();
const sessionController = require("../controllers/sessionController");

router.post("/", (request, resonse) => {
  console.log("Router Works");
  response.json({ message: "it works" });
});

module.exports = router;
