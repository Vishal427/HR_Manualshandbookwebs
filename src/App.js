import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { AnimatePresence } from 'framer-motion';
import theme from './theme';
import Layout from './components/Layout';
import Welcome from './pages/Welcome';
import WhoWeAre from './pages/WhoWeAre';
import WhatWeAreAbout from './pages/WhatWeAreAbout';
import CoreValues from './pages/CoreValues';
import HowToUse from './pages/HowToUse';
import Journey from './pages/Journey';
import Impact from './pages/Impact';
import GettingStarted from './pages/GettingStarted';
import Policies from './pages/Policies';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Layout>
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Welcome />} />
              <Route path="/who-we-are" element={<WhoWeAre />} />
              <Route path="/what-we-are-about" element={<WhatWeAreAbout />} />
              <Route path="/core-values" element={<CoreValues />} />
              <Route path="/how-to-use" element={<HowToUse />} />
              <Route path="/journey" element={<Journey />} />
              <Route path="/impact" element={<Impact />} />
              <Route path="/getting-started" element={<GettingStarted />} />
              <Route path="/policies" element={<Policies />} />
            </Routes>
          </AnimatePresence>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App; 