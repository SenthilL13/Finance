import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography, Card, CardContent, Box } from '@mui/material';
import { styled } from '@mui/system';

const TrendingFundCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-5px)',
    boxShadow: theme.shadows[4],
  },
}));

function TrendingFundsSection() {
  const [funds, setFunds] = useState([
    { name: 'Growth Fund', value: 1000, change: 5.2 },
    { name: 'Equity Fund', value: 2500, change: -2.1 },
    { name: 'Balanced Fund', value: 1500, change: 3.7 }
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFunds(prevFunds => prevFunds.map(fund => ({
        ...fund,
        value: fund.value * (1 + (Math.random() - 0.5) * 0.02),
        change: (Math.random() - 0.5) * 2
      })));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box sx={{ py: 8, bgcolor: 'grey.100' }} id="Trending">
      <Container>
        <Typography variant="h3" align="center" gutterBottom>
          <Typography component="span" color="secondary" variant="h3">Trending</Typography> Funds
        </Typography>
        <Grid container spacing={4}>
          {funds.map((fund, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <TrendingFundCard>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {fund.name}
                  </Typography>
                  <Typography variant="h4" color="primary" gutterBottom>
                    ₹{fund.value.toFixed(2)}
                  </Typography>
                  <Typography 
                    color={fund.change >= 0 ? 'success.main' : 'error.main'}
                  >
                    {fund.change >= 0 ? '↑' : '↓'} {Math.abs(fund.change).toFixed(2)}%
                  </Typography>
                </CardContent>
              </TrendingFundCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default TrendingFundsSection;

