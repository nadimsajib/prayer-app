import { createTheme } from '@mui/material/styles';

export const prayerTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#2E7D32', // Dark Green
      light: '#4CAF50',
      dark: '#1B5E20',
    },
    secondary: {
      main: '#66BB6A', // Light Green
      light: '#81C784',
      dark: '#388E3C',
    },
    background: {
      default: '#0A0F0D', // Very Dark Green/Black
      paper: '#1A231F', // Dark Green
    },
    text: {
      primary: '#E8F5E9', // Light Green/White
      secondary: '#A5D6A7', // Medium Green
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h4: {
      fontWeight: 600,
    },
    h6: {
      fontWeight: 500,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'linear-gradient(135deg, #1B5E20 0%, #2E7D32 100%)',
          borderRadius: '16px',
          boxShadow: '0 8px 32px rgba(46, 125, 50, 0.3)',
        },
      },
    },
  },
});