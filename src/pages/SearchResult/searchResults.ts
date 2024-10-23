import { Theme } from '@mui/material/styles';

export const createSearchStyles = (theme: Theme) => ({
  filterDrid: {
    maxWidth: '200px',
    minWidth: '200px',
    '@media (max-width: 900px)': {
      display: 'none',
    },
  },
  filterMenuStyles: {
    display: 'none',
    '@media (max-width: 900px)': {
      display: 'block',
    },
  },
  movieListHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: `1px solid ${theme.palette.primary.main}`,
  },
  headerTextStyle: {
    color: theme.palette.primary.main,
    fontSize: '1rem',
  },
});
