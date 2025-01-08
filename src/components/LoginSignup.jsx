import React, { useState } from "react";
import {
  TextField,
  Button,
  Grid,
  Typography,
  Paper,
  Box,
  Container,
  createTheme,
  ThemeProvider,
  Snackbar,
  Alert,
} from "@mui/material";
import { styled } from "@mui/system";
import { useNavigate } from "react-router-dom";
import fetchdata from "./api/fetchdata";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6A5ACD", // SlateBlue
    },
    secondary: {
      main: "#FF4E50", // Coral-like color
    },
  },
});

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%", // Vibrant gradient
  borderRadius: "15px",
  boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
  backdropFilter: "blur(4px)",
  border: "1px solid rgba(255, 255, 255, 0.18)",
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "#000000",
    },
  },

  "& .MuiInputBase-input": {
    color: "#000000",
  },
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
  background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
  border: 0,
  borderRadius: 3,
  boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
  color: "white",
  height: 48,
  padding: "0 30px",
  "&:hover": {
    background: "linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)",
  },
}));

const BackgroundContainer = styled("div")({
  minHeight: "100vh",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: `linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)`,
});

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("info"); // success, error, info, warning
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const navigate = useNavigate();

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const showSnackbar = (message, severity) => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setOpenSnackbar(true);
  };

  const validateFields = () => {
    if (!username) return "User Name is required!";
    if (!password) return "Password is required!";
    if (!isLogin && !email) return "Email is required!";
    return null;
  };

  const handleLogin = () => {
    const error = validateFields();
    if (error) {
      showSnackbar(error, "error");
      return;
    }

    const payload = { username, password };
    fetchdata
      .ac_login(payload) // Replace with your actual login API method
      .then((response) => {
        console.log("Response:", response);
        if (response.rval === 1) {
          localStorage.setItem("user_id", response.user_id);
          showSnackbar(response.msg, "success");
          if (response.isadmin == 1) {
            navigate("/admin");
          } else {
            navigate("/home");
          } // Navigate to dashboard
        } else {
          showSnackbar(response.msg || "Invalid credentials!", "error");
        }
      })
      .catch((error) => {
        console.error("Error during API request:", error);
        showSnackbar("Failed to login. Please try again.", "error");
      });
  };

  const handleSignup = () => {
    const error = validateFields();
    if (error) {
      showSnackbar(error, "error");
      return;
    }

    const payload = { username: username, password: password, email: email };
    fetchdata
      .ac_signup(payload) // Replace with your actual signup API method
      .then((response) => {
        console.log("Response:", response);
        if (response.rval === 1) {
          showSnackbar(
            response.msg || "Sign-up successful! Please login.",
            "success"
          );
          setIsLogin(true); // Switch to login mode
        } else {
          showSnackbar(response.msg || "Sign-up failed!", "error");
        }
      })
      .catch((error) => {
        console.error("Error during API request:", error);
        showSnackbar("Failed to sign up. Please try again.", "error");
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <BackgroundContainer id="login">
        <Container component="main" maxWidth="xs" id="login">
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <StyledPaper elevation={6}>
              <Typography
                component="h1"
                variant="h4"
                sx={{ mb: 3, color: "#000000", fontWeight: "bold" }}
              >
                {isLogin ? "Login" : "Sign Up"}
              </Typography>
              <Box component="form" noValidate sx={{ mt: 1, width: "100%" }}>
                <StyledTextField
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="User Name"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  variant="outlined"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {!isLogin && (
                  <StyledTextField
                    margin="normal"
                    required
                    fullWidth
                    name="email"
                    label="Email"
                    type="email"
                    id="email"
                    variant="outlined"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                )}
                <StyledButton
                  type="button"
                  fullWidth
                  variant="contained"
                  onClick={isLogin ? handleLogin : handleSignup}
                >
                  {isLogin ? "Sign In" : "Sign Up"}
                </StyledButton>
                <Grid container justifyContent="center">
                  <Grid item>
                    <Button
                      onClick={() => setIsLogin(!isLogin)}
                      sx={{ mt: 2, color: "#000000" }}
                    >
                      {isLogin ? (
                        <>
                          Don't have an account?{" "}
                          <span
                            style={{
                              color: "#912edf",
                              fontSize: "1.2rem",
                              marginLeft: "8px",
                            }}
                          >
                            Sign Up
                          </span>
                        </>
                      ) : (
                        <>
                          Already have an account?{" "}
                          <span
                            style={{
                              color: "#912edf",
                              fontSize: "1.3rem",
                              marginLeft: "8px",
                            }}
                          >
                            Login
                          </span>
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
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
};

export default LoginSignup;
