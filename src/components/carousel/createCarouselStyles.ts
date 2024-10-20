import { Theme } from '@mui/material/styles';

export const createCarouselStyles = (theme: Theme) => ({
  movieBoxStyles: { width: '240px', height: '350px', marginBottom: '30px' },
  headerBtnStyles: {
    fontSize: '15px',
    color: theme.palette.text.secondary,
    '&:hover': {
      color: theme.palette.text.primary,
    },
  },
  movieGridStyles: {
    border: '2px solid black',
    borderRadius: '10px',
    width: '100%',
    height: '100%',
    '&:hover': { border: '2px  solid #00e054' },
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
  } as React.CSSProperties,
});
