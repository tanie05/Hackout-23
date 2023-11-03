const mongoose = require('mongoose');

const culturalStorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  media: {
    type: String,
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true
  },
});

const CulturalStory = mongoose.model('CulturalStory', culturalStorySchema);

module.exports = CulturalStory;