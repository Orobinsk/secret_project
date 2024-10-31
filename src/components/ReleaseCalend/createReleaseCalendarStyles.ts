import { Theme } from '@mui/material/styles';

export const createReleaseCalendarStyles = (theme: Theme) => ({
  releaseHeader: {
    paddingBottom: '8px',
    marginBottom: '16px',
    fontSize: '15px',
    color: theme.palette.text.secondary,
    borderBottom: `1px solid ${theme.palette.text.secondary}`,
    [theme.breakpoints.down('md')]: {
      fontSize: '12px',
    },
  },
  routerLink: {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
    color: theme.palette.text.secondary,
  },
  comingSoonText: {
    fontSize: '15px',
    color: theme.palette.text.secondary,
    [theme.breakpoints.down('md')]: {
      fontSize: '12px',
    },
  },
  paperStyles: {
    minHeight: '110px',
    backgroundColor: 'transparent',
    transition: 'background-color 0.3s',
    '&:hover': {
      backgroundColor: 'transparent',
    },
    borderBottom: `1px solid ${theme.palette.text.secondary}`,
  },
  typographyStyles: {
    variant: 'body2',
    color: theme.palette.text.secondary,
    pr: 1,
    minWidth: '40px',
    textAlign: 'center',
  },
  imgStyles: {
    width: '60px',
    height: 'auto',
    marginRight: '8px',
  } as React.CSSProperties,
  movieItem: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  movieTitle: {
    variant: 'body1',
    color: theme.palette.text.secondary,
    paddingLeft: '24px',
    flex: 1,
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.primary.contrastText,
    },
    [theme.breakpoints.down('md')]: {
      fontSize: '10px',
    },
  },
  releaseDateContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  releaseDay: {
    color: theme.palette.primary.contrastText,
    [theme.breakpoints.down('md')]: {
      fontSize: '10px',
    },
  },
  releaseMonth: {
    variant: 'body2',
    color: theme.palette.text.secondary,
    [theme.breakpoints.down('md')]: {
      fontSize: '10px',
    },
  },
});
