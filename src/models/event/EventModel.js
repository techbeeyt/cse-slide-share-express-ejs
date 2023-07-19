const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title for the event'],
    trim: true,
    maxlength: [100, 'Event title cannot be more than 50 characters'],
  },
  description: {
    type: String,
    required: [true, 'Please provide a description for the event'],
    trim: true,
    maxlength: [1000, 'Event description cannot be more than 500 characters'],
  },
  eventDate: {
    type: Date,
    required: [true, 'Please provide a date for the event'],
  },
  eventTime: {
    type: String,
    required: [true, 'Please provide a time for the event'],
  },
  eventLocation: {
    type: String,
    required: [true, 'Please provide a location for the event'],
  },
});

const Events = mongoose.model('Event', eventSchema);

module.exports = Events;