import React from 'react';
import { Typography, Box } from '@mui/material';

function SMACrossOver({ service }) {
  return (
    <Box textAlign="center" mt={{ xs: 2, sm: 4 }}>
      <Typography variant="h4" gutterBottom>{service}</Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        This tool is used to detect when the simple moving average over a shorter
        term passes over the simple moving average of a longer term. This typically
        indicates a change in trend (the question is how strong will it be and how long
        will it continue) that can be profited from. For this tool, the thresholds are designed
        to detect swing-trading trends that take place over days or weeks.
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        This tool is designed to send signals at 9am and 3pm EST - before market open and close.
        Under normal conditions, this method boasts 85% accuracy; however, it is important to
        remember that qualitative factors can quickly change the trend detected by quantitative analysis.
      </Typography>
      <Typography variant="body1">
        Pricing: FREE
      </Typography>
    </Box>
  );
}

export default SMACrossOver;
