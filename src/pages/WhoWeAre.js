import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Paper } from '@mui/material';

const pageAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

function WhoWeAre() {
  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageAnimation}
    >
      <Typography variant="h1" gutterBottom>
        Who We Are
      </Typography>
      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <Typography variant="body1" paragraph>
          Encardio Rite is a leading organization committed to excellence and innovation. Our team consists of dedicated professionals who work together to deliver outstanding results and maintain the highest standards of quality in everything we do.
        </Typography>
        <Typography variant="body1" paragraph>
          With years of experience in our industry, we have built a reputation for reliability, integrity, and exceptional service. Our diverse workforce brings together unique perspectives and skills, enabling us to tackle challenges creatively and effectively.
        </Typography>
      </Paper>
    </motion.div>
  );
}

export default WhoWeAre; 