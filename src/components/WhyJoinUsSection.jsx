import React, { useState, useRef } from 'react';
import { 
  Container, 
  Grid, 
  Typography, 
  Card, 
  CardContent, 
  CardMedia, 
  Button, 
  Box
} from '@mui/material';
import JoinUsForm from './JoinUsForm';

function WhyJoinUsSection() {
  const [showForm, setShowForm] = useState(false);
  const formRef = useRef(null);

  // const handleJoinUsClick = () => {
  //   setShowForm(true);
  //   setTimeout(() => {
  //     formRef.current?.scrollIntoView({ behavior: 'smooth' });
  //   }, 100);
  // };

  return (
    <Box >
      <Box sx={{ py: 8 }} id="join">
        <Container>
          <Typography variant="h3" align="center" gutterBottom>
            Why <Typography component="span" color="secondary" variant="h3">Join Us ?</Typography>
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Card>
                <CardMedia
                  component="img"
                  image="https://i.ibb.co/7j3YYwv/Gain-Insights.jpg"
                  alt="Team Meeting"
                />
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    <Box component="span" color="primary.main">Gain </Box>
                    <Box component="span" color="secondary.main">Insights</Box>
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
✅ Expert Management – Our funds are managed by experienced professionals who analyze market trends to maximize returns. <br /> <br />

✅ Diversified Portfolio – Reduce risk and achieve balanced growth with a well-diversified investment strategy.                  </Typography>
                  <Button variant="contained" color="secondary" href="#joinform">
                    Join Us
                  </Button>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardContent>
                  <Typography variant="h5" gutterBottom>
                    <Box component="span" color="primary.main">Gain </Box>
                    <Box component="span" color="secondary.main">Insights</Box>
                  </Typography>
                  <Typography variant="body2" color="text.secondary" paragraph>
✅ Flexible Investment Options – Start small and invest at your own pace with SIPs and lump sum plans. <br />  <br />

✅ Transparency & Security – Stay informed with real-time portfolio tracking and secure transactions.                  </Typography>
                </CardContent>
                <CardMedia
                  component="img"
                  image="https://i.ibb.co/nkVsqHt/Gain-Insights-2.jpg"
                  alt="Person Working"
                />
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {showForm && (
        <Box sx={{ py: 8, bgcolor: 'white' }} ref={formRef}>
          <JoinUsForm />
        </Box>
      )}
    </Box>
  );
}

export default WhyJoinUsSection;

