import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import habitRoutes from "./routes/habitRoutes.js";

dotenv.config();

// Connection to MongoDB
connectDB();

const app = express();
const PORT = process.env.PORT || 1011;

app.use(cors());
app.use(express.json());

// Connect routes with routers
app.use("/api/auth", userRoutes);
app.use("/api", habitRoutes);

app.get("/", (req, res) => {
  res.send("Backend HabitTrack works!");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
