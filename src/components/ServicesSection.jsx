import React from 'react';
import { Container, Grid, Typography, Card, CardContent, CardMedia } from '@mui/material';

function ServicesSection() {
  const services = [
    {
      title: 'KYC Notification',
      description: 'Quick and secure verification process for your investments.',
      image: 'https://i.ibb.co/G7n5DBn/KYC-Modification.jpg',
    },
    {
      title: 'Capital Gain Statement',
      description: 'Detailed analysis of your investment returns.',
      image: 'https://i.ibb.co/R36ZVCY/Capital-Gain-Statement.jpg',
    },
    {
      title: 'Get Valuation',
      description: 'Real-time portfolio valuation and tracking.',
      image: 'https://i.ibb.co/k1SJPP5/Get-Valuation.jpg',
    },
  ];

  return (
    <Container sx={{ py: 8,}} id="hero-section">
      <Typography variant="h3" align="center" gutterBottom>
        Our <Typography variant="h3" component="span" color="secondary">Services</Typography>
      </Typography>
      <Grid container spacing={4}>
        {services.map((service, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                image={service.image}
                alt={service.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="h2">
                  {service.title}
                </Typography>
                <Typography>
                  {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ServicesSection;

