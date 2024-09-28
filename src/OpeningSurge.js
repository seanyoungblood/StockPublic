import React from 'react';
import { Typography, Box } from '@mui/material';

function OpeningSurge({ service }) {
  return (
    <Box textAlign="center" mt={{ xs: 2, sm: 4 }}>
      <Typography variant="h4" gutterBottom>{service}</Typography>
      <Typography variant="body1">
        This tool is under development and will be used to detect rapid changes in stock 
        price at market open before they occur.
      </Typography>
    </Box>
  );
}

export default OpeningSurge;