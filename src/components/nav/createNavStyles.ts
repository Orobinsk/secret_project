import { Theme } from '@mui/material/styles';

export const createNavStyles = (theme: Theme) => ({
  iconButtonStyles: {
    color: theme.palette.primary.main,

    display: 'none',
    [theme.breakpoints.down('md')]: {
      display: 'block',
    },
  },
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },

  menuContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-around',
    marginTop: '1rem',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  drawerItem: {
    color: theme.palette.primary.main,
  },
  menuItem: {
    display: 'block',
    color: theme.palette.primary.main,
    borderRadius: '2rem',
    fontSize: '1.5rem',
    padding: '0.1rem',
    '&:hover': {
      color: theme.palette.primary.light,
    },
    '& .MuiTouchRipple-root': {
      display: 'none',
    },
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  searchField: {
    maxWidth: '30rem',
    minWidth: '20rem',
    mt: 2,
    '& .MuiInputBase-root': {
      height: '4rem',
      borderRadius: '2rem',
      bgcolor: 'white',
      fontSize: '1.4rem',
      color: theme.palette.primary.main,
    },
  },
  searchIcon: {
    color: theme.palette.primary.main,
    cursor: 'pointer',
  },
});
