const mongoose = require('mongoose');
const Event = require('../models/eventModel');

exports.createEvent = async (req, res) => {
    const { title, description, date, location } = req.body;

    if (!title || !description || !date || !location) {
        return res.status(400).json({ error: 'Invalid request' });
    }

    const newEvent = await Event.create({
        title,
        description,
        date,
        location,
    });
    res.status(200).json(newEvent);
};

exports.getEventById = async (req, res) => {
    try {
        const { id } = req.params;
        
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ error: 'Invalid event ID' });
        }

        const event = await Event.findById(id);
        
        if (!event) {
            return res.status(404).json({ error: 'Event not found' });
        }

        res.status(200).json(event);
    } catch (error) {
        res.status(500).json({ error: 'Server error' });
    }
};


