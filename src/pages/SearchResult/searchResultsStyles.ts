import { Theme } from '@mui/material/styles';

export const createSearchStyles = (theme: Theme) => ({
  filterDrid: {
    maxWidth: '20rem',
    minWidth: '20rem',
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  filterMenuStyles: {
    display: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'block',
    },
  },
  movieListHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: `0.1rem solid ${theme.palette.primary.main}`,
  },
  headerTextStyle: {
    color: theme.palette.primary.main,
    fontSize: '2.5em',
  },
});
