import express from "express";
import { getAllUsers } from "../../controllers/usersController.js";
// import { verifyLoggedIn } from "../../controllers/sessionController.js";

const router = express.Router();

router.route("/").get(getAllUsers);
router.get("/", getAllUsers);
// router.get("/", verifyLoggedIn);


export default router;
