const express = require("express");
const router = express.Router();
const sessionController = require("../controllers/sessionController");

router.get("/", sessionController.handleLogout);

module.exports = router;
