const express = require('express');
const router = express.Router();
const eventsController = require('../controllers/eventsController');

// POST /api/events
router.post('/', eventsController.createEvent);

// GET /api/events/:id
router.get('/:id', eventsController.getEventById);

module.exports = router;
