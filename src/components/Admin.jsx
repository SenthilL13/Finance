import React, { useState } from 'react';
import { Container, Tab, Tabs, Box, TextField, Button, IconButton, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

// User Management Data (simulated)
const users = [
  { id: 1, name: 'User 1' },
  { id: 2, name: 'User 2' },
  { id: 3, name: 'User 3' },
  { id: 4, name: 'User 4' },
  { id: 5, name: 'User 5' },
];

const Admin = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [contentData, setContentData] = useState({ field1: '', field2: '', field3: '' });

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleDeleteUser = (userId) => {
    // Handle user deletion logic
    console.log('Deleted user with ID:', userId);
  };

  const handleSubmitContent = () => {
    console.log('Content submitted:', contentData);
  };

  const handleContentChange = (e) => {
    setContentData({ ...contentData, [e.target.name]: e.target.value });
  };

  return (
    <Box
      sx={{
         background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh',
        padding: 2,
      }}
    >
      <Container maxWidth="lg">
        <Tabs value={selectedTab} onChange={handleTabChange} centered>
          <Tab label="User Management" sx={{color:'white'}}/>
          <Tab label="Content Management" sx={{color:'white'}}/>
        </Tabs>

        {selectedTab === 0 && (
          <Box>
            <Box display="flex" flexWrap="wrap" gap={5} flexDirection="column" sx={{alignItems:'center',justifyContent:'center',mt:10}}>
              {users.map((user) => (
                <Paper
                  key={user.id}
                  sx={{
                    padding: 2,
                    width: 400,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    borderRadius: 2,
                    backgroundColor: 'rgba(255, 255, 255, 0.7)', // Semi-transparent white background
                  }}
                >
                  <Typography variant="body1">{user.name}</Typography>
                  <IconButton onClick={() => handleDeleteUser(user.id)} color="error">
                    <DeleteIcon />
                  </IconButton>
                </Paper>
              ))}
            </Box>
          </Box>
        )}

        {selectedTab === 1 && (
          <Box>
            <Typography variant="h6" gutterBottom color="white">
              Content Management
            </Typography>
            <TextField
              label="Text 1"
              fullWidth
              margin="normal"
              name="field1"
              value={contentData.field1}
              onChange={handleContentChange}
              sx={{
                input: { color: 'white' },
                label: { color: 'white' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'white', // White border color
                  },
                  '&:hover fieldset': {
                    borderColor: 'white', // White border on hover
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'white', // White border when focused
                  },
                },
              }}
            />
            <TextField
              label="Text 2"
              fullWidth
              margin="normal"
              name="field2"
              value={contentData.field2}
              onChange={handleContentChange}
              sx={{
                input: { color: 'white' },
                label: { color: 'white' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'white',
                  },
                  '&:hover fieldset': {
                    borderColor: 'white',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'white',
                  },
                },
              }}
            />
            <TextField
              label="Text 3"
              fullWidth
              margin="normal"
              name="field3"
              value={contentData.field3}
              onChange={handleContentChange}
              sx={{
                input: { color: 'white' },
                label: { color: 'white' },
                '& .MuiOutlinedInput-root': {
                  '& fieldset': {
                    borderColor: 'white',
                  },
                  '&:hover fieldset': {
                    borderColor: 'white',
                  },
                  '&.Mui-focused fieldset': {
                    borderColor: 'white',
                  },
                },
              }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmitContent}
              sx={{ mt: 2 }}
            >
              Submit
            </Button>
          </Box>
        )}
      </Container>
    </Box>
  );
};

export default Admin;
