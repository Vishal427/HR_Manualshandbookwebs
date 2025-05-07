import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Card, CardContent, Grid, Paper } from '@mui/material';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
  },
}));

const contentAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      staggerChildren: 0.2
    }
  }
};

const itemAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

function Welcome() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={contentAnimation}
    >
      <Typography 
        component={motion.h1} 
        variants={itemAnimation}
        variant="h1" 
        gutterBottom
      >
        Welcome to Encardio Rite
      </Typography>

      <Typography 
        component={motion.div}
        variants={itemAnimation}
        variant="h3" 
        gutterBottom 
        color="primary"
      >
        A Heartfelt Welcome from Our Leadership
      </Typography>

      <Paper 
        component={motion.div}
        variants={itemAnimation}
        elevation={2} 
        sx={{ p: 3, mb: 4 }}
      >
        <Typography variant="body1" paragraph>
          Welcome to Encardio Rite's digital handbook - your comprehensive guide to our organization's culture, values, and policies. This interactive manual has been crafted to provide you with all the essential information you need to thrive in our community.
        </Typography>
      </Paper>

      <Grid container spacing={3}>
        {['Who We Are', 'What We Are About', 'Our Core Values', 'How to Use This Handbook'].map((title, index) => (
          <Grid item xs={12} sm={6} md={3} key={index} component={motion.div} variants={itemAnimation}>
            <StyledCard>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Explore our {title.toLowerCase()} section to learn more about what makes Encardio Rite unique and how you can make the most of your journey with us.
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </motion.div>
  );
}

export default Welcome; 