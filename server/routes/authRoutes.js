import express from "express";
import { login, logout, register, sendVerifyOtp, verifyEmail } from "../controllers/authController.js";
import userAuth from "../middleware/userAuth.js";

// Create a router with the name authRouter
const authRouter = express.Router();

// Add different endpoints for the auth router
authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.post("/send-verify-otp", userAuth,sendVerifyOtp);
authRouter.post("/verify-account",userAuth, verifyEmail);

// Export the router
export default authRouter;
