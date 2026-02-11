import express from "express";
import protect from "../middlewares/protect.js";
import { getLogsByHabit, addLog, updateLog, deleteLog } from "../controllers/logController.js";

const router = express.Router();

router.get("/:habitId", protect, getLogsByHabit);

router.post("/:habitId", protect, addLog);

router.patch("/:habitId/:logId", protect, updateLog);

router.delete("/:habitId/:logId", protect, deleteLog);

export default router;
