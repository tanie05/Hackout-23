const express = require('express');
const router = express.Router();
const Storytelling = require('../models/CulturalStoryModel');
const requireLogin  = require('../Middleware/requireLogin')

// Create a new story
router.post('/', requireLogin, async (req, res) => {
  try {
    const newStory = await Storytelling.create(req.body);
    res.status(201).json(newStory);
  } catch (error) {
    res.status(500).json({ error: 'Could not create the story.' });
  }
});

// Read all stories
router.get('/', requireLogin, async (req, res) => {
  try {
    const stories = await Storytelling.find();
    res.status(200).json(stories);
  } catch (error) {
    res.status(500).json({ error: 'Could not fetch stories.' });
  }
});

// Read a specific story by ID
router.get('/:storyId',requireLogin, async (req, res) => {
  const storyId = req.params.storyId;

  try {
    const story = await Storytelling.findById(storyId);
    if (!story) {
      return res.status(404).json({ error: 'Story not found.' });
    }
    res.status(200).json(story);
  } catch (error) {
    res.status(500).json({ error: 'Could not fetch the story.' });
  }
});

// Update a story by ID
router.put('/:storyId', requireLogin, async (req, res) => {
  const storyId = req.params.storyId;

  try {
    const updatedStory = await Storytelling.findByIdAndUpdate(storyId, req.body, {
      new: true,
    });
    res.status(200).json(updatedStory);
  } catch (error) {
    res.status(500).json({ error: 'Could not update the story.' });
  }
});

// Delete a story by ID
router.delete('/:storyId', requireLogin, async (req, res) => {
  const storyId = req.params.storyId;

  try {
    await Storytelling.findByIdAndDelete(storyId);
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: 'Could not delete the story.' });
  }
});

module.exports = router;
