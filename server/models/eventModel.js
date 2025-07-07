const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String }, 
  description: { type: String },
  date: { type: Date },
  location: { type: String },
});

// Create a model for our Heists based on the schema
const Event = mongoose.model('Event', eventSchema);

module.exports = Event;