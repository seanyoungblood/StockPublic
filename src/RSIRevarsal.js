import React from 'react';
import { Typography, Box } from '@mui/material';

function RSIReversal({ service }) {
  return (
    <Box textAlign="center" mt={{ xs: 2, sm: 4 }}>
      <Typography variant="h4" gutterBottom>{service}</Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        This tool is used to detect when the relative strength index begins to return to fair value from overbought
        or oversold. This indicates a likely reversal of trend before it solidifies. This tool
        pairs well with the SMA crossover because it can detect trends before they form.
        The thresholds for this tool are set to match the SMA Crossover - trends in days or weeks.
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        This tool is designed to send signals at 9am and 3pm EST - before market open and close.
        Under normal conditions, this method works on lower accuracy, but provides opportunity
        for larger returns. It is important to remember that qualitative factors can quickly change the
        trend detected by quantitative analysis.
      </Typography>
      <Typography variant="body1">
        Pricing: FREE
      </Typography>
    </Box>
  );
}

export default RSIReversal;