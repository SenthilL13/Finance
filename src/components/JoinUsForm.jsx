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

const handleSubmit = (e) => {
  e.preventDefault();
  const mailtoLink = `mailto:reachsharmi2020@mail.com?subject=New Join Us Form Submission&body=
    Name: ${formData.name}%0D%0A
    City: ${formData.city}%0D%0A
    State: ${formData.state}%0D%0A
    Status: ${formData.status}%0D%0A
    Message: ${formData.message}`;
  
  window.location.href = mailtoLink;
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
