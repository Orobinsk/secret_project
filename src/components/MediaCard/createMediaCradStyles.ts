import { Theme } from '@mui/material/styles';

export const createSearchStyles = (theme: Theme) => ({
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
    marginBottom: '8px',
    '&:hover': {
      color: '#00e054',
    },
    fontSize: '1.2rem',
    '@media (max-width: 600px)': {
      fontSize: '1.5rem',
    },
    '@media (max-width: 400px)': {
      fontSize: '1.2rem',
    },
  },
});
