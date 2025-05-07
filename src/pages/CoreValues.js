import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Grid, Card, CardContent } from '@mui/material';

const pageAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { 
    opacity: 1, 
    y: 0,
    transition: {
      staggerChildren: 0.2
    }
  },
  exit: { opacity: 0, y: -20 }
};

const cardAnimation = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 }
};

function CoreValues() {
  const values = [
    {
      title: 'Integrity',
      description: 'We conduct our business with the highest standards of honesty, transparency, and ethical behavior.'
    },
    {
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, consistently delivering high-quality results.'
    },
    {
      title: 'Innovation',
      description: 'We embrace creativity and continuously seek new ways to improve and solve challenges.'
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and foster an inclusive environment where all voices are heard.'
    },
    {
      title: 'Respect',
      description: 'We treat everyone with dignity and respect, valuing diverse perspectives and experiences.'
    },
    {
      title: 'Responsibility',
      description: 'We take ownership of our actions and are committed to sustainable practices and social responsibility.'
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
        Our Core Values
      </Typography>

      <Grid container spacing={3}>
        {values.map((value, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div variants={cardAnimation}>
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Typography variant="h5" gutterBottom color="primary">
                    {value.title}
                  </Typography>
                  <Typography variant="body1">
                    {value.description}
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

export default CoreValues; 