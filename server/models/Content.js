const mongoose = require('mongoose');

const contentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  section: {
    type: String,
    required: true,
    enum: [
      'welcome',
      'who-we-are',
      'what-we-are-about',
      'core-values',
      'how-to-use',
      'journey',
      'impact',
      'getting-started',
      'policies'
    ]
  },
  content: {
    type: String,
    required: true,
  },
  order: {
    type: Number,
    required: true,
  },
  lastUpdated: {
    type: Date,
    default: Date.now,
  },
  metadata: {
    type: Map,
    of: String,
    default: {},
  }
});

// Add indexes for better query performance
contentSchema.index({ section: 1, order: 1 });

module.exports = mongoose.model('Content', contentSchema); 