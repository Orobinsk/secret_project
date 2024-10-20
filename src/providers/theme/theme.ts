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
      main: `#89a`, // используем для описания
      contrastText: '#00e054', // основной контрастный цвет
    },
    secondary: {
      main: 'rgb(0, 224, 84)',
      contrastText: '#41BCF4', // вторичный контрастный цвет
    },
    text: {
      primary: '#fff',
      secondary: '#9ab',
    },
  },
});
