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
    primary: {
      light: `#fff`,
      main: `#89a`,
      contrastText: '#00e054',
    },
    secondary: {
      main: 'rgb(0, 224, 84)',
    },
    text: {
      primary: '#fff',
      secondary: '#9ab',
    },
  },
});
