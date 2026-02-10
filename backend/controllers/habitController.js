import Habit from "../models/habitModel.js";

const getAllHabits = async (req, res) => {
  try {
    const habits = await Habit.find({ isActive: true, userId: req.user._id });

    res.status(200).json({ message: "Habits received", habits });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Something went wrong receiving all habits" });
  }
};

const addHabit = async (req, res) => {
  try {
    const { title, emoji } = req.body;

    if (!title || !emoji) {
      return res.status(400).json({ message: "Title and emoji are required" });
    }

    const newHabit = await Habit.create({
      userId: req.user._id,
      title,
      emoji,
      isActive: true,
    });

    res.status(201).json({ message: "Habit created", habit: newHabit });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong adding new habit" });
    console.error(error.stack);
  }
};

const deactivateHabit = async (req, res) => {
  try {
    const { id } = req.params;

    const habit = await Habit.findOne({ _id: id, userId: req.user._id });

    if (!habit) {
      return res.status(404).json({ message: "Habit not found" });
    }

    habit.isActive = false;
    await habit.save();

    res.status(200).json({ message: "Habit deactivated", habit });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Something went wrong deactivating habit" });
  }
};

const deleteHabit = async (req, res) => {
  try {
    const deletedHabit = await Habit.findOneAndDelete({ _id: req.params.id, userId: req.user._id });

    if (!deletedHabit) {
      return res.status(404).json({ message: "Habit not found" });
    }

    res.status(200).json({ message: "Habit deleted", habit: deletedHabit });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong deleting habit" });
  }
};

export { getAllHabits, addHabit, deleteHabit, deactivateHabit };
