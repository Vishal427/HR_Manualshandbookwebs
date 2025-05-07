import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Paper, Grid, Card, CardContent } from '@mui/material';

const pageAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const cardAnimation = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 },
};

function WhatWeAreAbout() {
  const missions = [
    {
      title: 'Our Mission',
      content: 'To provide innovative solutions and exceptional service while maintaining the highest standards of quality and integrity.'
    },
    {
      title: 'Our Vision',
      content: 'To be the industry leader in our field, recognized for excellence, innovation, and positive impact on our community.'
    },
    {
      title: 'Our Promise',
      content: 'To deliver consistent value to our stakeholders while fostering a culture of continuous improvement and sustainable growth.'
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
        What We Are About
      </Typography>
      
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <Typography variant="body1" paragraph>
          At Encardio Rite, we are driven by our commitment to excellence and our dedication to making a positive impact in everything we do.
        </Typography>
      </Paper>

      <Grid container spacing={3}>
        {missions.map((mission, index) => (
          <Grid item xs={12} md={4} key={index}>
            <motion.div variants={cardAnimation}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    {mission.title}
                  </Typography>
                  <Typography variant="body1">
                    {mission.content}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </motion.div>
  );
}

export default WhatWeAreAbout; 