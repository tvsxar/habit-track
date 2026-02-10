import mongoose from "mongoose";

const habitSchema = new mongoose.Schema(
  {
    userId: { type:  mongoose.Schema.Types.ObjectId, required: true },
    title: { type: String, required: true },
    emoji: { type: String, required: true },
    isActive: { type: Boolean, default: true }
  },
  { timestamps: true },
);

export default mongoose.model("Habit", habitSchema);
