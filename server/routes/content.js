const express = require('express');
const router = express.Router();
const Content = require('../models/Content');

// Get all content for a section
router.get('/section/:section', async (req, res) => {
  try {
    const content = await Content.find({ section: req.params.section })
      .sort('order')
      .exec();
    res.json(content);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific content item
router.get('/:id', async (req, res) => {
  try {
    const content = await Content.findById(req.params.id);
    if (content) {
      res.json(content);
    } else {
      res.status(404).json({ message: 'Content not found' });
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create new content
router.post('/', async (req, res) => {
  const content = new Content({
    title: req.body.title,
    section: req.body.section,
    content: req.body.content,
    order: req.body.order,
    metadata: req.body.metadata
  });

  try {
    const newContent = await content.save();
    res.status(201).json(newContent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update content
router.patch('/:id', async (req, res) => {
  try {
    const content = await Content.findById(req.params.id);
    if (!content) {
      return res.status(404).json({ message: 'Content not found' });
    }

    if (req.body.title) content.title = req.body.title;
    if (req.body.content) content.content = req.body.content;
    if (req.body.order) content.order = req.body.order;
    if (req.body.metadata) content.metadata = req.body.metadata;
    content.lastUpdated = Date.now();

    const updatedContent = await content.save();
    res.json(updatedContent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete content
router.delete('/:id', async (req, res) => {
  try {
    const content = await Content.findById(req.params.id);
    if (!content) {
      return res.status(404).json({ message: 'Content not found' });
    }
    await content.remove();
    res.json({ message: 'Content deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router; 