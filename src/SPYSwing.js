import React from 'react';
import { Typography, Box } from '@mui/material';

function SPYSwing({ service }) {
  return (
    <Box textAlign="center" mt={{ xs: 2, sm: 4 }}>
      <Typography variant="h4" gutterBottom>{service}</Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        This tool is used to detect when SPY's price makes a rapid, large change during
        market hours. Typically after a rapid and abnormal change in price, the market will
        eventually stabilize, and then correct itself - an opportunity for profit. This tool is designed
        for day traders, and corrections may only last 30 minutes. 
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        This tool is designed to send signals from 10am to 1:45pm EST every 15 minutes, 
        this method boasts upwards of 90% accuracy after stabilization. When a signal is
        recieved, wait for stabilization, then buy or short.
      </Typography>
      <Typography variant="body1">
        Pricing: $4 / month
      </Typography>
    </Box>
  );
}

export default SPYSwing;
