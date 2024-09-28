import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container, Box } from '@mui/material';
import HomePage from './HomePage';
import SMACrossOver from './SMACrossOver';
import RSIReversal from './RSIRevarsal';
import BillingPage from './BillingPage';
import SPYSwing from './SPYSwing';
import OpeningSurge from './OpeningSurge';

function App() {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Stock Trading Wizard
          </Typography>
          <Button color="inherit" component={Link} to="/">Home</Button>
          <Button color="inherit" component={Link} to="/service1">SMA Crossover</Button>
          <Button color="inherit" component={Link} to="/service2">RSI Reversal</Button>
          <Button color="inherit" component={Link} to="/service3">SPY Swing</Button>
          <Button color="inherit" component={Link} to="/service4">Opening Surge</Button>
          <Button color="inherit" component={Link} to="/billing">Billing</Button>
        </Toolbar>
      </AppBar>

      <Container sx={{ mt: 4 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/service1" element={<SMACrossOver service="SMA Crossover" />} />
          <Route path="/service2" element={<RSIReversal service="RSI Reversal" />} />
          <Route path="/service3" element={<SPYSwing service="SPY Swing" />} />
          <Route path="/service4" element={<OpeningSurge service="Opening Surge" />} />
          <Route path="/billing" element={<BillingPage />} />
        </Routes>
        <Box component="footer" sx={{ py: 3, textAlign: 'center', backgroundColor: '#f5f5f5', mt: 4 }}>
          <Typography variant="body2" color="textSecondary">
            Youngblood Software, LLC
          </Typography>
        </Box>
      </Container>
    </Router>
  );
}

export default App;
