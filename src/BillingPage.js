import React from 'react';
import { Typography, Box, List, ListItem, ListItemText } from '@mui/material';

function BillingPage() {
  return (
    <Box textAlign="center" mt={{ xs: 2, sm: 4 }}>
      <Typography variant="h4" gutterBottom>
        Billing
      </Typography>
      <Typography variant="body1">
        An account registration/management page is currently being developed
        - all billing is done manually via Zelle (seanjyoungblood@hotmail.com) 
        or Venmo (youngblood-software) on an agreed upon date. If you wish to
        utilize tools prior, please email seanjyoungblood@hotmail.com with:
      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        <List>
            <ListItem>
            <ListItemText primary="Your name" />
            </ListItem>
            <ListItem>
            <ListItemText primary="Your mobile number" />
            </ListItem>
            <ListItem>
            <ListItemText primary="The tools you wish to use" />
            </ListItem>
            <ListItem>
            <ListItemText primary="The signed terms and conditions" />
            </ListItem>
        </List>
      </Box>
      <Typography variant="body1">
        At the moment, any billing or service changes should be done via email.
      </Typography>
      <a href="/TermsAndCondAug6-3.pdf" download>
        Terms and Conditions
      </a>
    </Box>
  );
}

export default BillingPage;
