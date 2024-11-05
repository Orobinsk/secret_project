import { theme } from '../../providers/theme/theme';

export const createListOfMoviesStyles = () => ({
  wrapperStyles: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    mt: 5,
  },
  headerTypographyStyles: {
    fontSize: '15px',
    color: theme.palette.text.secondary,
    [theme.breakpoints.down('md')]: {
      fontSize: '12px',
    },
  },

  itemWrapperStyles: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: `1px solid ${theme.palette.text.secondary}`,
  },
  posterImgStyles: {
    border: '2px solid transparent',
    position: 'relative',
    '&:hover': { border: '2px solid #00e054' },
    aspectRatio: '2 / 3',
    [theme.breakpoints.down('md')]: { aspectRatio: '1 / 1.5' },
    [theme.breakpoints.down('sm')]: { aspectRatio: '1 / 1.5' },
    [theme.breakpoints.down('xs')]: { aspectRatio: '1 / 1.5' },
  },
  imgStyles: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
    color: theme.palette.text.primary,
    textAlign: 'center',
    textDecoration: 'none',
  } as React.CSSProperties,
});
