import { Theme } from '@mui/material/styles';

export const createSearchStyles = (theme: Theme) => ({
  gridItemStyles: {
    display: 'flex',
    flexDirection: 'row',
    borderRadius: '0.8rem',
    cursor: 'pointer',
    padding: '1rem',
  },
  imgWrapperStyles: {
    width: '15rem',
    height: '22.5rem',
    overflow: 'hidden',
    borderRadius: '0.8rem',
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
    borderRadius: '0.8rem',
    color: '#00e054',
    '&:hover': {
      border: '2px solid #00e054',
    },
  } as React.CSSProperties,

  itemTitleStyle: {
    color: theme.palette.text.primary,
    fontSize: '2.5rem',
    marginBottom: '0.8rem',
    '&:hover': {
      color: '#00e054',
    },
  },
  itemOverviewStyle: {
    color: theme.palette.text.secondary,
    fontSize: '2rem',
    marginBottom: '0.8rem',
    [theme.breakpoints.up('xs')]: {
      fontSize: '1.5rem',
    },
  },
});
