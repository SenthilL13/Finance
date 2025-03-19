import React, { useState, useEffect } from 'react';
import { Container, Tab, Tabs, Box, TextField, Button, IconButton, Typography, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import fetchdata from './api/fetchdata';
import { useNavigate } from 'react-router-dom';


const Admin = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [users, setUsers] = useState([]);
const [contentData, setContentData] = useState([]);
  const navigate = useNavigate();
  let user_id = localStorage.getItem('user_id');


  useEffect(() => {
    Get_Users();
    Get_Service()
  }, []);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const Get_Users = () => {
    const payload = { user_id, action: '' };
    fetchdata
      .ac_user_manage(payload)
      .then((response) => {
        setUsers(response.users);
      })
      .catch((error) => {
        console.error('Error during API request:', error);
      });
  };

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

  const handleDeleteUser = (userId) => {
    console.log('delete', userId);
    const payload = { user_id: userId, action: 'delete' };
    fetchdata
      .ac_user_manage(payload)
      .then((response) => {
        setUsers(response.users);
        window.location.reload();
      })
      .catch((error) => {
        console.error('Error during API request:', error);
      });
  };

  const handleSubmitContent = () => {
  const payload = {
    action: "update",
    services: contentData.map(service => ({
      service_id: service.service_id,
      service_name: service.service_name
    }))
  };

  fetchdata.ac_content_manage(payload)
    .then(response => {
      if (response.rval === 1) {
        console.log("Content updated successfully!");
        alert("Content updated successfully!");
      } else {
        console.error("Error updating content:", response.msg);
        alert("Failed to update content!");
      }
    })
    .catch(error => {
      console.error("Error during API request:", error);
      alert("An error occurred while updating content.");
    });
};


  const handleContentChange = (e) => {
    setContentData({ ...contentData, [e.target.name]: e.target.value });
  };

  const handleLogout = () => {
   navigate('/')
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
    <Box  sx={{ mb: 2,position:'absolute',top:20,right:20}}>
          <Button variant="contained" color="primary" onClick={handleLogout}>
            Logout
          </Button>
        </Box>

      <Container maxWidth="lg">
        {/* Logout Button at the Top Right */}
        

        <Tabs value={selectedTab} onChange={handleTabChange} centered>
          <Tab label="User Management" sx={{ color: 'white' }} />
          <Tab label="Content Management" sx={{ color: 'white' }} />
        </Tabs>

        {selectedTab === 0 && (
          <Box>
            <Box display="flex" flexWrap="wrap" gap={5} flexDirection="column" sx={{ alignItems: 'center', justifyContent: 'center', mt: 10 }}>
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
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                  }}
                >
                  <Typography variant="body1">{user.username}</Typography>
                  <IconButton onClick={() => handleDeleteUser(user.user_id)} color="error">
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

    {contentData.map((service, index) => (
      <TextField
        key={service.service_id}
        label={service.service_name} // Set API service name as label
        fullWidth
        margin="normal"
        name={`field${index + 1}`}
        value={service.service_name} // Display the name from API
        onChange={(e) => {
          const updatedData = [...contentData];
          updatedData[index].service_name = e.target.value;
          setContentData(updatedData);
        }}
        sx={{
          input: { color: 'white' },
          label: { color: 'white' },
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: 'white' },
            '&:hover fieldset': { borderColor: 'white' },
            '&.Mui-focused fieldset': { borderColor: 'white' },
          },
        }}
      />
    ))}

    <Button variant="contained" color="primary" onClick={handleSubmitContent} sx={{ mt: 2 }}>
      Submit
    </Button>
  </Box>
)}
      </Container>
    </Box>
  );
};

export default Admin;
