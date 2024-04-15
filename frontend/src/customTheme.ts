import { extendTheme } from '@mui/joy/styles';

const primaryColor = '#005876';

export default extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          mainChannel: 'var(--joy-palette-primary-400)',
          50: '#ffffff',
          100: '#C0CCD9',
          200: '#5193d9',
          300: '#0090C1',
          400: '#005876',
          500: '#005876',
          600: '#053C51',
          700: '#053C51',
          800: '#032d3f',
          900: '#03212c',
        },
      },
    },
  },
  typography: {
    h1: {
      fontFamily: 'Syne, sans-serif',
      fontWeight: 530,
      fontSize: '148px',
      color: primaryColor,
    },
    h2: {
      fontFamily: 'Syne, sans-serif',
      fontWeight: 450,
      fontSize: '84px',
      color: primaryColor,
    },
  },
  components: {
    JoyButton: {
      styleOverrides: {
        root: {
          backgroundColor: '#032d3f',
          border: '2px solid #053C51',
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: '300',
          fontSize: '18px',
          padding: '8px 20px',
          transition: '0.2s',
          '&:hover': {
            backgroundColor: '#12518f',
            border: '2px solid #12518f',
          },
        },
      },
    },
    JoyLink: {
      styleOverrides: {
        root: {
          fontFamily: 'Montserrat, sans-serif',
          fontWeight: 400,
          fontSize: '16px',
          color: '#000',
          position: 'relative',
          transition: ' 0.5s',
          '&::before': {
            content: '""',
            position: 'absolute',
            bottom: -5,
            left: 0,
            width: '100%',
            height: '4px',
            backgroundColor: '#fff',
            transition: ' 0.5s',
          },
          '&:hover': {
            textDecoration: 'none',

            '&::before': {
              content: '""',
              position: 'absolute',
              bottom: -5,
              left: 0,
              width: '80%',
              height: '4px',
              backgroundColor: '#E191A1',
            },
          },
        },
      },
    },
  },
});
declare module '@mui/joy/styles' {}
