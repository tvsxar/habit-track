import Log from "../models/logModel.js";
import Habit from "../models/habitModel.js";

const getLogsByHabit = async (req, res) => {
  try {
    const { habitId } = req.params;

    const habit = await Habit.findOne({ _id: habitId, userId: req.user._id });
    if (!habit) {
      return res.status(404).json({ message: "Habit not found" });
    }

    const logs = await Log.find({ habitId, userId: req.user._id });

    res.status(200).json({ message: "Logs received", logs });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong fetching logs" });
  }
};

const addLog = async (req, res) => {
  try {
    const { habitId } = req.params;
    const { status, date } = req.body;

    if (!status || !date) {
      return res.status(400).json({ message: "Status and date are required" });
    }

    const habit = await Habit.findOne({ _id: habitId, userId: req.user._id });
    if (!habit) {
      return res.status(404).json({ message: "Habit not found" });
    }

    const newLog = await Log.create({
      userId: req.user._id,
      habitId,
      status,
      date,
    });

    res.status(201).json({ message: "Log created", log: newLog });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong adding log" });
  }
};

const updateLog = async (req, res) => {
  try {
    const { logId } = req.params;
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({ message: "Status is required" });
    }

    const log = await Log.findOne({ _id: logId, userId: req.user._id });
    if (!log) {
      return res.status(404).json({ message: "Log not found" });
    }

    log.status = status;
    await log.save();

    res.status(200).json({ message: "Log updated", log });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong updating log" });
  }
};

const deleteLog = async (req, res) => {
  try {
    const { logId } = req.params;

    const deletedLog = await Log.findOneAndDelete({
      _id: logId,
      userId: req.user._id,
    });

    if (!deletedLog) {
      return res.status(404).json({ message: "Log not found" });
    }

    res.status(200).json({ message: "Log deleted", log: deletedLog });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong deleting log" });
  }
};

export { getLogsByHabit, addLog, updateLog, deleteLog };
