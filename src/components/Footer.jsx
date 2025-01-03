import React from 'react';
import { Container, Grid, Typography, Link, Box, IconButton } from '@mui/material';
import { Instagram, Facebook, LinkedIn, YouTube, WhatsApp } from '@mui/icons-material';

function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: 'grey.900', color: 'white', py: 6 }}>
      <Container>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <img src="https://i.ibb.co/NN9yCYk/pixelcut-export-3.png" alt="Logo" style={{ height: 40, marginBottom: 16 }} />
            <Typography variant="body2">
              Grow Your <Box component="span" color="secondary.main">Wealth</Box>, Secure<br />
              Your Future - Smarter<br />
              Investments <Box component="span" color="secondary.main">Start Here!</Box>
            </Typography>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Company
            </Typography>
            <Link href="#home" color="inherit" display="block" sx={{ mb: 1 }}>
              About
            </Link>
            <Link href="#join" color="inherit" display="block" sx={{ mb: 1 }}>
              Contact Us
            </Link>
            <Link href="#Trending" color="inherit" display="block" sx={{ mb: 1 }}>
              Funds
            </Link>
          </Grid>
          <Grid item xs={12} md={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us On
            </Typography>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <IconButton color="inherit" aria-label="Instagram">
                <Instagram />
              </IconButton>
              <IconButton color="inherit" aria-label="Facebook">
                <Facebook />
              </IconButton>
              <IconButton color="inherit" aria-label="LinkedIn">
                <LinkedIn />
              </IconButton>
              <IconButton color="inherit" aria-label="YouTube">
                <YouTube />
              </IconButton>
              <IconButton color="inherit" aria-label="WhatsApp">
                <WhatsApp />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ borderTop: 1, borderColor: 'grey.800', mt: 4, pt: 4 }}>
          <Grid container>
            <Grid item xs={12} sm={6}>
              <Link href="#" color="inherit" sx={{ mr: 2 }}>Privacy Policy</Link>
              <Link href="#" color="inherit">Terms and Conditions</Link>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
              <Typography variant="body2">&copy; 2023</Typography>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;

