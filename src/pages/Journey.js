import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Paper } from '@mui/material';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

const pageAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

function Journey() {
  const milestones = [
    {
      year: '1995',
      title: 'Foundation',
      description: 'Encardio Rite was established with a vision to revolutionize the industry.'
    },
    {
      year: '2000',
      title: 'Expansion',
      description: 'Expanded operations to multiple regions and diversified our service offerings.'
    },
    {
      year: '2010',
      title: 'Innovation',
      description: 'Launched groundbreaking solutions and received industry recognition.'
    },
    {
      year: '2015',
      title: 'Global Presence',
      description: 'Established international offices and partnerships worldwide.'
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Embraced digital innovation and launched new technology platforms.'
    },
    {
      year: '2023',
      title: 'Sustainable Future',
      description: 'Committed to sustainability and environmental responsibility.'
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
        Our Journey
      </Typography>

      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <Typography variant="body1" paragraph>
          Explore the key milestones that have shaped our organization's growth and success over the years.
        </Typography>
      </Paper>

      <Timeline position="alternate">
        {milestones.map((milestone, index) => (
          <TimelineItem key={index}>
            <TimelineSeparator>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                <TimelineDot color="primary" />
              </motion.div>
              {index < milestones.length - 1 && <TimelineConnector />}
            </TimelineSeparator>
            <TimelineContent>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <Paper elevation={2} sx={{ p: 2, mb: 2 }}>
                  <Typography variant="h6" color="primary">
                    {milestone.year}
                  </Typography>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {milestone.title}
                  </Typography>
                  <Typography variant="body2">
                    {milestone.description}
                  </Typography>
                </Paper>
              </motion.div>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </motion.div>
  );
}

export default Journey; 