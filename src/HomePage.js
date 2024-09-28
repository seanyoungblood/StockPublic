import React from 'react';
import { Typography, Box } from '@mui/material';

function HomePage() {
  return (
    <Box textAlign="center" mt={{ xs: 2, sm: 4 }}>
      <Typography variant="h3" gutterBottom>
        Welcome to Trading Wizard
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        The Trading Wizard software provides traders and investors with tools designed
        to improve performance by sending signals directly to your mobile device.
        The tools are billed per-service (some are even free), so you only pay for what you need.
      </Typography>
      <Typography variant="body1" sx={{ mb: 3 }}>
        It is important to note that these are TOOLS, not magic pills. I, the developer, am by
        no means an "expert" and I don't have a $500 course to sell you, but I am more tha happy to 
        share knowledge on how I use this system for myself.
      </Typography>
      <Typography variant="body1">
        Technical documentation pending. Please direct any technical inquires to 
        seanjyoungblood@hotmail.com.
      </Typography>
    </Box>
  );
}

export default HomePage;
