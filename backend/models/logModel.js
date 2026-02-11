import mongoose from "mongoose";

const logSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    habitId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["completed", "missed", "skipped"],
      required: true,
    },
  },
  { timestamps: true },
);

logSchema.index({ userId: 1, habitId: 1, date: 1 }, { unique: true });

export default mongoose.model("Log", logSchema);
