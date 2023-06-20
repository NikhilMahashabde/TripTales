const express = require("express");
const router = express.Router();
const sessionController = require("../controllers/sessionController");

router.post("/", sessionController.handleLogin);

module.exports = router;
