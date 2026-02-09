import express from "express";
const router = express.Router();
import {
  registerUser,
  loginUser,
  logoutUser,
  getMe,
} from "../controllers/userController";

// Register
router.post("/register", registerUser);

// Login
router.post("/login", loginUser);

// Logout
router.post("/logout", logoutUser);

// Me (check token for authorized routes)
router.get("/me", getMe);

module.exports = router;
