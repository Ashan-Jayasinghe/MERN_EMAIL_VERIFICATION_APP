import express from "express";
import { login, logout, register } from "../controllers/authController.js";

// Create a router with the name authRouter
const authRouter = express.Router();

// Add different endpoints for the auth router
authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/logout", logout);

// Export the router
export default authRouter;
