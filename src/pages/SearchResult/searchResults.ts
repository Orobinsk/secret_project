import { Theme } from '@mui/material/styles';

const createSearchStyles = (theme: Theme) => ({
  typographyHeaderStyle: {
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    color: theme.palette.primary.main,
  },
});

export default createSearchStyles;
