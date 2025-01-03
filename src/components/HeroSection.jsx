import React, { useState } from 'react';
import { Container, Grid, Typography, Button, Box, useTheme } from '@mui/material';
import { styled } from '@mui/system';

const HeroContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#ffffcc',
  padding: theme.spacing(12, 0),
  position: 'relative',
  overflow: 'hidden',
}));

const FloatingShape = styled(Box)(({ theme }) => ({
  position: 'absolute',
  borderRadius: '50%',
  animation: 'float 6s infinite ease-in-out',
}));

const ChatBotContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  zIndex: 1000,
}));

const ChatBotBox = styled(Box)(({ theme }) => ({
  width: '300px',
  border: '1px solid #ccc',
  borderRadius: '10px',
  backgroundColor: '#f9f9f9',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
}));

const ChatBotHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px',
  backgroundColor: '#ff5354',
  color: 'white',
  borderTopLeftRadius: '10px',
  borderTopRightRadius: '10px',
}));

const ChatBotBody = styled(Box)(({ theme }) => ({
  padding: '10px',
}));

const ChatBotInput = styled('input')(({ theme }) => ({
  width: '100%',
  padding: '8px',
  border: '1px solid #ccc',
  borderRadius: '5px',
  marginTop: '10px',
}));

function HeroSection() {
  const [isChatBotOpen, setIsChatBotOpen] = useState(false);
  const theme = useTheme();

  const toggleChatBot = () => {
    setIsChatBotOpen(!isChatBotOpen);
  };

  return (
    <HeroContainer id="home">
      <FloatingShape
        sx={{
          background: theme.palette.primary?.main || '#0078d4',
          width: 50,
          height: 50,
          top: '20%',
          left: '10%',
        }}
      />
      <FloatingShape
        sx={{
          background: theme.palette.secondary?.main || '#ff4081',
          width: 30,
          height: 30,
          top: '60%',
          right: '20%',
        }}
      />
      <Container>
        <Grid container alignItems="center" spacing={4}>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" component="h1" gutterBottom>
              Grow Your <Box component="span" color={theme.palette.secondary?.main || '#ff4081'}>Wealth</Box>,
            </Typography>
            <Typography variant="h4" gutterBottom>
              Secure Your Future - Smarter Investments
            </Typography>
            <Typography variant="h6" paragraph>
              Start your journey to financial freedom today!
            </Typography>
            <Button variant="contained" color="secondary" size="large" sx={{ mr: 2 }}>
              Start your savings
            </Button>
            {/* <Button variant="outlined" color="secondary" size="large" onClick={toggleChatBot}>
              Chat us
            </Button> */}
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ position: 'relative' }}>
              <img src="https://i.ibb.co/L68y6RR/pixelcut-export-1-1.png" alt="Investment Illustration" style={{ maxWidth: '100%', height: 'auto' }} />
            </Box>
          </Grid>
        </Grid>
      </Container>

      <ChatBotContainer>
        {isChatBotOpen ? (
          <ChatBotBox>
            <ChatBotHeader>
              <Typography variant="subtitle1" fontWeight="bold">
                ChatBot
              </Typography>
              <Button onClick={toggleChatBot} sx={{ color: 'white', minWidth: 'auto', p: 0 }}>
                X
              </Button>
            </ChatBotHeader>
            <ChatBotBody>
              <Typography variant="body2" paragraph>
                Hello! How can I assist you today?
              </Typography>
              <ChatBotInput type="text" placeholder="Type your message..." />
            </ChatBotBody>
          </ChatBotBox>
        ) : (
          <Button
            variant="contained"
            color="secondary"
            onClick={toggleChatBot}
            sx={{ borderRadius: '5px' }}
          >
            Open ChatBot
          </Button>
        )}
      </ChatBotContainer>
    </HeroContainer>
  );
}

export default HeroSection;

