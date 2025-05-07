import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import { Box, AppBar, Toolbar, Typography, IconButton, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const routes = [
  { path: '/', label: 'Welcome' },
  { path: '/who-we-are', label: 'Who We Are' },
  { path: '/what-we-are-about', label: 'What We Are About' },
  { path: '/core-values', label: 'Core Values' },
  { path: '/how-to-use', label: 'How to Use This Handbook' },
  { path: '/journey', label: 'Our Journey' },
  { path: '/impact', label: 'Our Impact' },
  { path: '/getting-started', label: 'Getting Started' },
  { path: '/policies', label: 'Policies' },
];

const pageTransition = {
  initial: { opacity: 0, x: 300 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -300 },
};

function Layout({ children }) {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const currentIndex = routes.findIndex(route => route.path === location.pathname);

  const handlers = useSwipeable({
    onSwipedLeft: () => {
      if (currentIndex < routes.length - 1) {
        navigate(routes[currentIndex + 1].path);
      }
    },
    onSwipedRight: () => {
      if (currentIndex > 0) {
        navigate(routes[currentIndex - 1].path);
      }
    },
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            HR Manuals Handbook
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <List sx={{ width: 250 }}>
          {routes.map((route) => (
            <ListItem
              button
              key={route.path}
              onClick={() => {
                navigate(route.path);
                toggleDrawer();
              }}
              selected={location.pathname === route.path}
            >
              <ListItemText primary={route.label} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Box
        component={motion.div}
        {...handlers}
        sx={{
          flexGrow: 1,
          p: 3,
          overflow: 'hidden'
        }}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransition}
        transition={{ type: "tween", duration: 0.3 }}
      >
        {children}
      </Box>
    </Box>
  );
}

export default Layout; 