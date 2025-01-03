import React from 'react';
import { Container, Grid, Typography, Button, Box } from '@mui/material';

function SipSection() {
  return (
    <Box sx={{ py: 8, }}>
      <Container>
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={5}>
            <Typography variant="h3" gutterBottom>
              SIP - <Typography component="span" color="secondary" variant="h3">Smartway to Invest in</Typography> Mutual Funds
            </Typography>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </Typography>
            <Button variant="contained" color="secondary" size="large">
              GET MORE
            </Button>
          </Grid>
          <Grid item xs={12} md={7}>
            <img src="https://i.ibb.co/87vtrKs/dolor-removebg-preview.png" alt="Investment Journey Illustration" style={{ maxWidth: '100%', height: 'auto' }} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default SipSection;

