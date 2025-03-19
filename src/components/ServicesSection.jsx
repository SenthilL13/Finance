import React,{useState,useEffect} from 'react';
import { Container, Grid, Typography, Card, CardContent } from '@mui/material';
import fetchdata from './api/fetchdata';


function ServicesSection() {
const [contentdata,setContentData] = useState([])
let user_id = localStorage.getItem('user_id');

  useEffect(() => {
    Get_Service()
  }, []);

const Get_Service = () => {
  const payload = { service_id: user_id, action: '' };

  fetchdata
    .ac_content_manage(payload)
    .then((response) => {
      if (response.services) {
        setContentData(response.services); // Store API service list
      }
    })
    .catch((error) => {
      console.error('Error fetching services:', error);
    });
};

  return (
    <Container sx={{ py: 8 }} id="hero-section">
      <Typography variant="h3" align="center" gutterBottom>
        Our <Typography variant="h3" component="span" color="secondary">Services</Typography>
      </Typography>
      <Grid container spacing={4}>
        {contentdata.map((service, index) => (
          <Grid item key={index} xs={12} sm={6} md={4}>
            <Card
              sx={{
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: 2,
                backgroundColor: '#c59dac', // Light background color
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
                borderRadius: 2,
                animation: 'float 3s ease-in-out infinite',
                '@keyframes float': {
                  '0%, 100%': { transform: 'translateY(0)' },
                  '50%': { transform: 'translateY(-10px)' },
                },
              }}
            >
              <CardContent>
                <Typography
                  variant="h5"
                  component="h2"
                  align="center"
                  sx={{ fontWeight: 'bold',color:'white' }}
                >
                  {service.service_name}
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
