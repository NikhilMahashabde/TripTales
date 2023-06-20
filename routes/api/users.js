const express = require("express");
const router = express.Router();
const usersController = require("../../controllers/usersController");

router.route("/").get(usersController.getAllUsers);

module.exports = router;
