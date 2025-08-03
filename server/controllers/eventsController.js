const mongoose = require("mongoose");
const Event = require("../models/eventModel");
const User = require("../models/userModel");

exports.createEvent = async (req, res) => {
  try {
    const { title, description, location, date, img } = req.body;
    const userId = req.user._id.toString();

    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: "User not found" });

    if (!title && !description) {
      return res
        .status(400)
        .json({ error: "Event must have a title or description" });
    }

    if (img) {
      // TODO: upload the image to a database. For now, just save the image string
    }

    const newEvent = new Event({
      user: userId,
      title,
      description,
      location,
      date: date ? new Date(date) : undefined,
      img,
    });

    await newEvent.save();
    res.status(201).json(newEvent);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
    console.log("Error in createEvent controller: ", error);
  }
};

exports.getEventById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid event ID" });
    }

    const event = await Event.findById(id);

    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }

    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};
