import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Paper, List, ListItem, ListItemText } from '@mui/material';

const pageAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

function HowToUse() {
  const instructions = [
    {
      title: 'Navigation',
      description: 'Use the sidebar menu or swipe left/right to navigate between sections.'
    },
    {
      title: 'Interactive Elements',
      description: 'Click on cards and buttons to reveal more information and interact with the content.'
    },
    {
      title: 'Search',
      description: 'Use the search function to quickly find specific information or policies.'
    },
    {
      title: 'Updates',
      description: 'Check the last updated date at the bottom of each section for the most recent information.'
    }
  ];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageAnimation}
    >
      <Typography variant="h1" gutterBottom>
        How to Use This Handbook
      </Typography>

      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <Typography variant="body1" paragraph>
          Welcome to our digital handbook! This guide will help you navigate through the various sections and make the most of its features.
        </Typography>
      </Paper>

      <List>
        {instructions.map((instruction, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
          >
            <Paper sx={{ mb: 2 }}>
              <ListItem>
                <ListItemText
                  primary={
                    <Typography variant="h6" color="primary">
                      {instruction.title}
                    </Typography>
                  }
                  secondary={instruction.description}
                />
              </ListItem>
            </Paper>
          </motion.div>
        ))}
      </List>
    </motion.div>
  );
}

export default HowToUse; 