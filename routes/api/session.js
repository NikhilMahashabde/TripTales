import express from "express";
import { verifyLoggedIn } from "../../controllers/sessionController.js";

const router = express.Router();

router.get("/", verifyLoggedIn);

export default router;
