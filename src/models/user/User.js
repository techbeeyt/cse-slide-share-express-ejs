const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
  },
  passwordHash: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: false,
    unique: true,
    minlength: 3,
  },
  checkpoint: {
    type: Number,
    required: true,
    default: 1,
  },
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user',
  },
  picture: {
    type: String,
    required: false,
  }
});

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    delete returnedObject.passwordHash;
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;