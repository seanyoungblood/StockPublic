import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#d32f2f',
    },
  },
  typography: {
    h3: {
      fontWeight: 600,
    },
    body1: {
      fontSize: '1.1rem',
    },
  },
});

export default theme;
