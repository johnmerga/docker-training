import express from "express";
import { signUp, signIn, signOut } from "../controllers/authController.js";
import authMiddleware from "../middleware/authMiddleware.js";
const router = express.Router();

router.post("/signup", signUp);
router.get("/signIn", signIn);
router.get("/signOut", authMiddleware, signOut);

export { router };
