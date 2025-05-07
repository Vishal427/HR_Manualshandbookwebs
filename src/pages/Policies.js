import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Paper, Accordion, AccordionSummary, AccordionDetails, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const pageAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

function Policies() {
  const policies = [
    {
      title: 'Work Hours and Time Off',
      content: 'Standard work hours are 9 AM to 5 PM with flexible arrangements available. Employees are entitled to paid time off, sick leave, and holidays as per company policy.'
    },
    {
      title: 'Code of Conduct',
      content: 'All employees are expected to maintain professional behavior, respect diversity, and adhere to ethical business practices.'
    },
    {
      title: 'Health and Safety',
      content: 'We are committed to providing a safe work environment. All employees must follow safety guidelines and report any concerns immediately.'
    },
    {
      title: 'Communication Guidelines',
      content: 'Maintain professional communication across all channels. Respect confidentiality and data protection policies.'
    },
    {
      title: 'Performance Review',
      content: 'Regular performance reviews are conducted to evaluate progress, set goals, and discuss career development opportunities.'
    },
    {
      title: 'Travel and Expenses',
      content: 'Business travel must be approved in advance. Expenses should be documented and submitted according to company guidelines.'
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
        Company Policies
      </Typography>

      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <Typography variant="body1" paragraph>
          Our policies are designed to create a positive, productive, and compliant work environment. Please review these guidelines carefully.
        </Typography>
      </Paper>

      <Box sx={{ mt: 2 }}>
        {policies.map((policy, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
              >
                <Typography variant="h6" color="primary">
                  {policy.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography variant="body1">
                  {policy.content}
                </Typography>
              </AccordionDetails>
            </Accordion>
          </motion.div>
        ))}
      </Box>
    </motion.div>
  );
}

export default Policies; 