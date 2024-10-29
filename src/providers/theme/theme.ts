import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },
  },
  palette: {
    background: {
      default: '#12161a',
    },
    primary: {
      light: `#fff`, //  используем для заголовков
      main: `#89a`, // используем для описания (серый)
      contrastText: '#00e054',
    },
    secondary: {
      light: `#00e054`, // зеленый
      main: '#41BCF4', // синий
      dark: '#ee7000', // оранжевый
      contrastText: '#41BCF4',
    },
    text: {
      primary: '#fff',
      secondary: '#9ab',
    },
  },
});
