import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';

function Navbar() {
  return (
    <AppBar position="static" color="transparent" elevation={0}>
      <Container>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <img src="https://i.ibb.co/NN9yCYk/pixelcut-export-3.png" alt="Logo" style={{ height: 40 }} />
          </Typography>
          <Button color="inherit" href="#home">Home</Button>
          <Button color="inherit" href="#hero-section">Our Services</Button>
          <Button color="inherit" href="#join">About Us</Button>
          <Button color="inherit" href="#join">Logout</Button>

        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;

