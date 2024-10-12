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
    },
    secondary: {
      main: 'rgb(0, 224, 84)',
    },
  },
});
