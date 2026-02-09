import jwt from "jsonwebtoken";

// Function to generate JWT token
export default function generateToken(userId) {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, { expiresIn: "30d" });
}
