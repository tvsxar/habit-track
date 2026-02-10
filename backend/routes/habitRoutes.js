import express from "express";
import protect from '../middlewares/protect.js';
import { getAllHabits, addHabit, deleteHabit, deactivateHabit } from '../controllers/habitController.js';

const router = express.Router(); 

router.get("/habits", protect, getAllHabits);

router.post("/habits", protect, addHabit);

router.patch("/habits/:id", protect, deactivateHabit);

router.delete("/habits/:id", protect, deleteHabit);

export default router;
