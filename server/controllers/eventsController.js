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
    // Implementation for login
    res.json({ message: 'Get event by id endpoint' });
};


