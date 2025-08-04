const express = require("express");
const router = express.Router();
const {
  createEvent,
  getEventById,
  deleteEvent,
  commentOnEvent,
  likeUnlikeEvent,
  trackUntrackEvent,
  getLikedEvents,
  getTrackedEvents,
  getUserEvents,
  getAllEvents,
} = require("../controllers/eventsController");
const { protectRoute } = require("../middleware/protectRoute");

// GET routes
// GET /api/events/:id
router.get("/:id", getEventById);

// GET /api/events/likes/:id
router.get("/likes/:id", protectRoute, getLikedEvents);

// GET /api/events/track/:id
router.get("/track/:id", protectRoute, getTrackedEvents);

// GET /api/events/user/:username
router.get("/user/:username", protectRoute, getUserEvents);

// GET /api/events/all
router.get("/all", protectRoute, getAllEvents);

// POST routes
// POST /api/events - Protected route
router.post("/", protectRoute, createEvent);

// POST /api/events/comment/:id
router.post("/comment/:id", protectRoute, commentOnEvent);

// POST /api/events/like/:id
router.post("/like/:id", protectRoute, likeUnlikeEvent);

// POST /api/events/track/:id
router.post("/track/:id", protectRoute, trackUntrackEvent);

// DELETE routes
// DELETE /api/events/:id
router.delete("/:id", protectRoute, deleteEvent);

module.exports = router;
