const mongoose = require('mongoose');

const subscriberSchema = new mongoose.Schema({
  user_id: {
    type: String,
    required: [true, 'Please provide a title'],
  },
  fcm_token: {
    type: String,
    required: [true, 'Please provide a fcm_token'],
  }
});

const Subsriber = mongoose.model('Event', subscriberSchema);

module.exports = Subsriber;