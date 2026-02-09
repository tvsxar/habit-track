import express from "express";
import protect from '../middlewares/protect.js';
import {
  registerUser,
  loginUser,
  logoutUser,
  getMe,
} from "../controllers/userController.js";
const router = express.Router(); 

// Register
router.post("/register", registerUser);

// Login
router.post("/login", loginUser);

// Logout
router.post("/logout", logoutUser);

// Me (check token for authorized routes)
router.get("/me", protect, getMe);

export default router;
