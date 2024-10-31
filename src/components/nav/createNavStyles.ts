import { Theme } from '@mui/material/styles';

export const createNavStyles = (theme: Theme) => ({
  openMenuBtn: {
    width: 30,
    height: 30,
  },
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
    zIndex: 100,
  },

  menuContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-around',
    marginTop: '10px',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  drawerItem: {
    color: theme.palette.primary.main,
  },
  menuItem: {
    cursor: 'pointer',
    display: 'block',
    color: theme.palette.primary.main,
    borderRadius: '20px',
    fontSize: '15px',
    padding: '10px',
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
    maxWidth: 200,
    minWidth: 200,
    '& .MuiInputBase-root': {
      height: '40px',
      borderRadius: '20px',
      bgcolor: 'white',
      fontSize: '14px',
      color: theme.palette.primary.main,
    },
  },
  searchIcon: {
    color: theme.palette.primary.main,
    cursor: 'pointer',
  },
});
