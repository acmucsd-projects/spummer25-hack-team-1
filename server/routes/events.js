const express = require("express");
const router = express.Router();
const eventsController = require("../controllers/eventsController");
const { protectRoute } = require("../middleware/protectRoute");

// POST /api/events - Protected route
router.post("/", protectRoute, eventsController.createEvent);

// GET /api/events/:id
router.get("/:id", eventsController.getEventById);

module.exports = router;
