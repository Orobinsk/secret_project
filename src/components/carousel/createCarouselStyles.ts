import { Theme } from '@mui/material/styles';

const createCarouselStyles = (theme: Theme) => ({
  headerBtnStyles: {
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
    '&:hover': { border: '2px solid #00e054' },
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
  } as React.CSSProperties,
});
export default createCarouselStyles;
