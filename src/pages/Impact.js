import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Paper, Grid, Card, CardContent, Box } from '@mui/material';

const pageAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

const cardAnimation = {
  initial: { opacity: 0, scale: 0.9 },
  animate: { opacity: 1, scale: 1 }
};

function Impact() {
  const impacts = [
    {
      category: 'Environmental',
      stats: '50% Carbon Reduction',
      description: 'Our commitment to sustainable practices has led to significant reduction in environmental impact.'
    },
    {
      category: 'Social',
      stats: '1000+ Lives Impacted',
      description: 'Through our community initiatives and social responsibility programs, we have made a positive difference.'
    },
    {
      category: 'Innovation',
      stats: '25+ Patents',
      description: 'Our innovative solutions have revolutionized industry standards and practices.'
    },
    {
      category: 'Economic',
      stats: '$10M+ Investment',
      description: 'We have contributed to economic growth through investments in local communities and businesses.'
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
        Our Impact
      </Typography>

      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <Typography variant="body1" paragraph>
          At Encardio Rite, we measure our success not just by our business growth, but by the positive impact we create in the world.
        </Typography>
      </Paper>

      <Grid container spacing={3}>
        {impacts.map((impact, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <motion.div 
              variants={cardAnimation}
              transition={{ delay: index * 0.2 }}
            >
              <Card sx={{ height: '100%' }}>
                <CardContent>
                  <Box sx={{ mb: 2 }}>
                    <Typography variant="h5" color="primary" gutterBottom>
                      {impact.category}
                    </Typography>
                    <Typography variant="h3" color="text.secondary" sx={{ fontWeight: 'bold' }}>
                      {impact.stats}
                    </Typography>
                  </Box>
                  <Typography variant="body1">
                    {impact.description}
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

export default Impact; 