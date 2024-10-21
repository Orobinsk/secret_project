import { Theme } from '@mui/material/styles';

const createSearchStyles = (theme: Theme) => ({
  typographyHeaderStyle: {
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    color: theme.palette.primary.main,
  },
  gridItemStyles: {
    border: '2px solid transparent',
    cursor: 'pointer',
    borderRadius: '8px',
    '&:hover': { border: '2px solid #00e054' },
  },
  imgStyles: {
    width: 'auto',
    height: '200px',
    objectFit: 'cover',
    cursor: 'pointer',
  } as React.CSSProperties,
  itemTitleStyle: {
    variant: 'h4',
    paddingRight: '20px',
    color: 'white',
    '&:hover': {
      color: '#41BCF4',
    },
  },
});

export default createSearchStyles;
