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
      img: img || "",
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
/**
 * id
 */
exports.deleteEvent = async (req, res) => {
  try {
    const userId = req.user && req.user._id ? req.user._id.toString() : null;
    if (!userId) return res.status(401).json({ error: "Unauthorized" });

    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid event ID" });
    }

    const event = await Event.findById(id);
    if (!event) return res.status(404).json({ error: "Event not found" });

    // authorized event creater
    const isOwner = event.user?.toString() === userId;
    // const isAdmin = req.user?.role === "admin";
    if (!isOwner) {
      return res
        .status(403)
        .json({ error: "Not allowed to delete this event" });
    }

    await event.deleteOne();
    return res.status(200).json({ message: "Event deleted", id });
  } catch (error) {
    console.error("Error in deleteEvent:", error);
    return res.status(500).json({ error: "Server error" });
  }
};

exports.commentOnEvent = async (req, res) => {
  try {
    const { text } = req.body;
    const eventId = req.params.id;
    const userId = req.params._id;

    if (!text) {
      return res.status(400).json({ error: "Text field is required" });
    }
    const event = await Event.findById(eventId);

    if (!event) {
      return res.status(404).json({ error: "Event not found" });
    }

    const comment = { user: userId, text };

    event.comments.push(comment);
    await event.save();

    res.status(200);
  } catch (error) {
    console.error("Error in commentonEvent:", error);
    return res.status(500).json({ error: "Server error" });
  }
};

exports.likeUnlikeEvent = async (req, res) => {
  try {
    const userId = req.user._id;
    const { id: eventId } = req.params;

    if (!Event) {
      return res.status(400).json({ error: "Event not found" });
    }
    const event = await Event.findById(eventId);

    const userLikedEvent = event.likes.includes(userId);

    if (userLikedEvent) {
      //unlike event
      await Event.updateOne({ _id: eventId }, { $pull: { likes: userId } });
      res.status(200).json({ message: "Event unliked successfully" });
    } else {
      //like event
      event.likes.push(userId);
      await event.save();

      const notification = new Notification({
        from: userId,
        to: event.user,
        type: "like",
      });

      await notification.save();
      res.status(200).json({ message: "Event liked successfully" });
    }
  } catch (error) {
    console.error("Error in likeUnlikeEvent controller:", error);
    return res.status(500).json({ error: "Server error" });
  }
};

exports.trackUntrackEvent = async (req, res) => {};

exports.getLikedEvents = async (req, res) => {
  try {
    const { id } = req.params;

    // Validate the user ID
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({ error: "Invalid user ID" });
    }

    // Check if user exists
    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Find all events where the user ID is in the likes array
    const likedEvents = await Event.find({
      likes: { $in: [id] },
    }).sort({ createdAt: -1 });

    res.status(200).json(likedEvents);
  } catch (error) {
    console.error("Error in getLikedEvents controller:", error);
    return res.status(500).json({ error: "Server error" });
  }
};

exports.getTrackedEvents = async (req, res) => {};

exports.getUserEvents = async (req, res) => {
  try {
    const { username } = req.params;

    // Find the user by username
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // Find all events created by this user
    const userEvents = await Event.find({ user: user._id }).sort({
      createdAt: -1,
    });

    res.status(200).json(userEvents);
  } catch (error) {
    console.error("Error in getUserEvents controller:", error);
    return res.status(500).json({ error: "Server error" });
  }
};

exports.getAllEvents = async (req, res) => {
  try {
    const event = await Event.find().sort({ createdAt: -1 });
    if (event.length === 0) {
      return res.status(200).json([]);
    }
    res.status(200).json(event);
  } catch (error) {
    console.error("Error in getAllEvents controller:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
