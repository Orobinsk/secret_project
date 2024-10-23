import { Theme } from '@mui/material/styles';

export const createNavStyles = (theme: Theme) => ({
  iconButtonStyles: {
    color: theme.palette.primary.main,
    display: 'none',
    '@media (max-width: 900px)': {
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
  logo: {
    width: '100px',
    height: '50px',
  },
  menuContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-around',
    marginTop: '10px',

    '@media (max-width: 600px)': {
      display: 'none',
    },
  },
  drawerItem: {
    color: theme.palette.primary.main,
  },
  menuItem: {
    display: 'block',
    color: theme.palette.primary.main,
    borderRadius: '20px',
    fontSize: '14px',
    padding: 1,
    '&:hover': {
      color: theme.palette.primary.light,
    },
    '& .MuiTouchRipple-root': {
      display: 'none',
    },
    '@media (max-width: 900px)': {
      display: 'none',
    },
  },
  searchField: {
    minWidth: '200px',
    mt: 2,
    '& .MuiInputBase-root': {
      height: 40,
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
