import { Theme } from '@mui/material/styles';

export const createCarouselStyles = (theme: Theme) => ({
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
    maxWidth: '250px',
    height: '370px',
    margin: 'auto',
    '&:hover': { border: '2px  solid #00e054' },
  },
  carouselImage: {
    width: '100%',
    height: '100%',
    borderRadius: '10px',
    objectFit: 'cover',
  } as React.CSSProperties,
});
