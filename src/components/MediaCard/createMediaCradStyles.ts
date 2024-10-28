import { Theme } from '@mui/material/styles';

export const createSearchStyles = (theme: Theme) => ({
  routerLinkStyles: {
    textDecoration: 'none',
    color: 'inherit',
    display: 'flex',
    alignItems: 'flex-start',
  },
  gridItemStyles: {
    display: 'flex',
    flexDirection: 'row',
    borderRadius: '8px',
    cursor: 'pointer',
    padding: '10px',
  },
  imgWrapperStyles: {
    width: '150px',
    height: '225px',
    overflow: 'hidden',
    borderRadius: '8px',
    border: '2px solid transparent',
    '&:hover': {
      border: '2px solid #00e054',
    },
  },
  imgStyles: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    cursor: 'pointer',
    borderRadius: '8px',
    color: '#00e054',
    '&:hover': {
      border: '2px solid #00e054',
    },
  } as React.CSSProperties,

  itemTitleStyle: {
    color: theme.palette.text.primary,
    fontSize: '25px',
    marginBottom: '8px',
    '&:hover': {
      color: '#00e054',
    },
  },
  itemOverviewStyle: {
    color: theme.palette.text.secondary,
    fontSize: '20px',
    marginBottom: '8px',
    [theme.breakpoints.up('xs')]: {
      fontSize: '15px',
    },
  },
});
