import express from "express";
import { handleLogin } from "../controllers/sessionController.js";
import { verifyLoggedIn } from "../controllers/sessionController.js";


const router = express.Router();

router.post("/", handleLogin);
router.get("/", verifyLoggedIn);

export default router;
