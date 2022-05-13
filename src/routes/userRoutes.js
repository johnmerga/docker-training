import express from "express";
import { signUp, signIn, signOut } from "../controllers/authController.js";
const router = express.Router();

router.post("/signup", signUp);
router.post("/signIn", signIn);
router.get("/signOut", signOut);

export { router };
