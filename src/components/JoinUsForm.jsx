import React, { useState } from 'react';
import { 
  Typography, 
  TextField, 
  Button, 
  Grid, 
  MenuItem, 
  Paper, 
  Container ,
  Box,
  Alert,
  Snackbar
} from '@mui/material';

function JoinUsForm() {
  const [formData, setFormData] = useState({
    name: '',
    city: '',
    state: '',
    status: '',
    message: ''
  });

  const [alertOpen, setAlertOpen] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);

    // Example: Sending form data as an email (requires backend setup)
    try {
      await fetch('/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          to: 'example@mail.com',
          subject: 'New Join Us Form Submission',
          body: `
            Name: ${formData.name}\n
            City: ${formData.city}\n
            State: ${formData.state}\n
            Status: ${formData.status}\n
            Message: ${formData.message}
          `,
        }),
      });
    } catch (error) {
      console.error('Error sending email:', error);
    }

    setAlertOpen(true);
    setFormData({
      name: '',
      city: '',
      state: '',
      status: '',
      message: ''
    });
  };

  const handleAlertClose = () => {
    setAlertOpen(false);
  };

  return (
     <Box sx={{ bgcolor: 'grey.100',paddingBottom:10,paddingTop:10 }} id="joinform" >
    <Container maxWidth="sm" >
      <Paper elevation={3} sx={{ p: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Join Us
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="City"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="State"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                select
                label="Status"
                name="status"
                value={formData.status}
                onChange={handleInputChange}
                required
              >
                <MenuItem value="student">Student</MenuItem>
                <MenuItem value="employee">Employee</MenuItem>
              </TextField>
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={4}
                label="Message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" variant="contained" color="secondary" fullWidth>
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
      <Snackbar open={alertOpen} autoHideDuration={6000} onClose={handleAlertClose}>
        <Alert onClose={handleAlertClose} severity="success" sx={{ width: '100%' }}>
          Form submitted successfully!
        </Alert>
      </Snackbar>
    </Container>
    </Box>
  );
}

export default JoinUsForm;
