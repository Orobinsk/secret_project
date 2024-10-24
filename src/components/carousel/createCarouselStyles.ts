import { Theme } from '@mui/material/styles';

export const createCarouselStyles = (theme: Theme) => ({
  headerBtnStyles: {
    fontSize: '2rem',
    color: theme.palette.text.secondary,
    '&:hover': {
      color: theme.palette.text.primary,
    },
  },
  movieGridStyles: {
    border: '0.2rem solid black',
    borderRadius: '1rem',
    width: '100%',
    height: '100%',
    '&:hover': { border: '0.2rem solid #00e054' },
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    borderRadius: '1rem',
  } as React.CSSProperties,
});
