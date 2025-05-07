import React from 'react';
import { motion } from 'framer-motion';
import { Typography, Paper, Stepper, Step, StepLabel, StepContent, Button, Box } from '@mui/material';

const pageAnimation = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 }
};

function GettingStarted() {
  const [activeStep, setActiveStep] = React.useState(0);

  const steps = [
    {
      label: 'Welcome to the Team',
      description: 'Complete your onboarding paperwork and review the employee handbook.',
    },
    {
      label: 'Meet Your Team',
      description: 'Get to know your colleagues and understand team dynamics.',
    },
    {
      label: 'Setup Your Workspace',
      description: 'Set up your workstation and required tools for your role.',
    },
    {
      label: 'Training and Development',
      description: 'Begin your initial training program and set development goals.',
    },
    {
      label: 'First Project',
      description: 'Get started with your first project and team collaboration.',
    }
  ];

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageAnimation}
    >
      <Typography variant="h1" gutterBottom>
        Getting Started
      </Typography>

      <Paper elevation={2} sx={{ p: 3, mb: 4 }}>
        <Typography variant="body1" paragraph>
          Welcome to your journey with Encardio Rite! Follow these steps to get started with your new role.
        </Typography>
      </Paper>

      <Paper elevation={2} sx={{ p: 3 }}>
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((step, index) => (
            <Step key={step.label}>
              <StepLabel>
                <Typography variant="h6">{step.label}</Typography>
              </StepLabel>
              <StepContent>
                <Typography>{step.description}</Typography>
                <Box sx={{ mb: 2 }}>
                  <div>
                    <Button
                      variant="contained"
                      onClick={handleNext}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      {index === steps.length - 1 ? 'Finish' : 'Continue'}
                    </Button>
                    <Button
                      disabled={index === 0}
                      onClick={handleBack}
                      sx={{ mt: 1, mr: 1 }}
                    >
                      Back
                    </Button>
                  </div>
                </Box>
              </StepContent>
            </Step>
          ))}
        </Stepper>
        {activeStep === steps.length && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>All steps completed - you are ready to start!</Typography>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              Reset
            </Button>
          </Paper>
        )}
      </Paper>
    </motion.div>
  );
}

export default GettingStarted; 