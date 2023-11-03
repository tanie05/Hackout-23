const mongoose = require('mongoose');

const guidedTourSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  guide: {
    type: String, 
    required: true
  },
  maxParticipants: {
    type: Number,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date,
    required: true
  },
  price: {
    type: Number,
    required: true
  }
});

const GuidedTour = mongoose.model('GuidedTour', guidedTourSchema);

module.exports = GuidedTour;