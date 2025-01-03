import React from 'react';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import TrendingFundsSection from './components/TrendingFundsSection';
import SipSection from './components/SipSection';
import WhyJoinUsSection from './components/WhyJoinUsSection';
import Footer from './components/Footer';
import LoginSignup from './components/LoginSignup';
import JoinUsForm from './components/JoinUsForm';
import Admin from './components/Admin';// Import the LoginScreen component
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#5B4DFF',
    },
    secondary: {
      main: '#FF4D6D',
    },
  },
  typography: {
    fontFamily: 'Inter, Roboto, Arial, sans-serif',
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Routes>
          <Route path="/home" element={<LoginSignup />} /> {/* Login Screen Route */}
          <Route path="/login" element={<Home />} />
          <Route path="/" element={<Admin />} /> {/* Home page after login */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

// Home Component for logged-in users
const Home = () => {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <TrendingFundsSection />
      <SipSection />
      <WhyJoinUsSection />
      <JoinUsForm/>
      <Footer />
    </div>
  );
};

export default App;
