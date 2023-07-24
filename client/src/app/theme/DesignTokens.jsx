import {blueGrey, grey} from '@mui/material/colors';

export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
        // palette values for light mode
        primary: {
          main: "#D6D6FF"
        },
        secondary: {
          main: "#f5f5f5"
        },
        divider: blueGrey[200],
        text: {
          primary: grey[900],
          secondary: grey[800],
        },
      }
      : {
        // palette values for dark mode
        primary: {
          main: '#433277',
        },
        secondary: {
          main: '#38383f',
        },
        background: {
          default: '#111125',
        },
        text: {
          primary: grey[50],
          secondary: grey[200],
        },
      }),
  },
  typography: {
    fontFamily: [
      '"Imprima"', '"Rubik"', 'sans-serif'
    ]
  }
});