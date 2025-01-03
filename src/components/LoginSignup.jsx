import React, { useState } from 'react';
import { 
  TextField, 
  Button, 
  Grid, 
  Typography, 
  Paper, 
  Box, 
  Container,
  createTheme,
  ThemeProvider
} from '@mui/material';
import { styled } from '@mui/system';

const theme = createTheme({
  palette: {
    primary: {
      main: '#6A5ACD', // SlateBlue
    },
    secondary: {
      main: '#FF4E50', // Coral-like color
    },
  },
});

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  background: 'linear-gradient(145deg, #8A2BE2, #FF69B4)', // Vibrant gradient
  borderRadius: '15px',
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  backdropFilter: 'blur(4px)',
  border: '1px solid rgba(255, 255, 255, 0.18)',
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      borderColor: 'rgba(255, 255, 255, 0.5)',
    },
    // '&:hover fieldset': {
    //   borderColor: 'rgba(255, 255, 255, 0.7)',
    // },
    '&.Mui-focused fieldset': {
      borderColor: '#FFFFFF',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#FFFFFF',
  },
  '& .MuiInputBase-input': {
    color: '#FFFFFF',
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
  '&:hover': {
    background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)',
  },
}));

const BackgroundContainer = styled('div')({
  minHeight: '100vh',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
 // backgroundColor: '#f2d7f3'
  background: `linear-gradient(135deg, #f2d7f3 0%, #e8bce9 50%, #dba3df 100%)`, // Gradient based on #F5F5DC
});

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <ThemeProvider theme={theme}>
      <BackgroundContainer>
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <StyledPaper elevation={6}>
              <Typography component="h1" variant="h4" sx={{ mb: 3, color: '#FFFFFF', fontWeight: 'bold' }}>
                {isLogin ? 'Login' : 'Sign Up'}
              </Typography>
              <Box component="form" noValidate sx={{ mt: 1, width: '100%' }}>
                <StyledTextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  variant="outlined"
                />
                <StyledTextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  variant="outlined"
                />
                {!isLogin && (
                  <StyledTextField
                    margin="normal"
                    required
                    fullWidth
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    id="confirmPassword"
                    variant="outlined"
                  />
                )}
                <StyledButton
                  type="submit"
                  fullWidth
                  variant="contained"
                >
                  {isLogin ? 'Sign In' : 'Sign Up'}
                </StyledButton>
                <Grid container justifyContent="center">
                  <Grid item>
                    <Button onClick={toggleForm} sx={{ mt: 2, color: '#FFFFFF' }}>
                    {isLogin ? (
                         <>
                             Don't have an account? <span style={{ color: '#912edf', fontSize: '1.3rem', marginLeft: '8px' }}>Sign Up</span>  
                          </>
                      ) : (
                          <>
                           Already have an account? <span style={{ color: '#912edf', fontSize: '1.3rem', marginLeft: '8px' }}>Login</span>
                          </>
                      )}                   
                       </Button>
                  </Grid>
                </Grid>
              </Box>
            </StyledPaper>
          </Box>
        </Container>
      </BackgroundContainer>
    </ThemeProvider>
  );
};

export default LoginSignup;

