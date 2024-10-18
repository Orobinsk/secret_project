import { Theme } from '@mui/material/styles';

const createModalStyles = (theme: Theme) => ({
  dialogStyles: {
    display: 'flex',
    justifyContent: 'center',
    backdropFilter: 'blur(2px)',
    width: '100%',
    height: '100%',
  },
  dialogContentStyles: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    padding: 0,
    bgcolor: 'transparent',
    overflow: 'hidden',
    width: '100%',
    maxHeight: '100vh',
  },
  modalImage: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
    display: 'block',
  } as React.CSSProperties,
  modalBtn: {
    position: 'absolute',
    top: 20,
    right: 10,
    height: '20px',
    color: theme.palette.primary.light,
    '&:hover': {
      color: theme.palette.primary.contrastText,
    },
  },
  buttonStyles: {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 1,
    color: theme.palette.primary.light,
    bgcolor: 'transparent',
    '&:hover': {
      bgcolor: 'transparent',
      color: theme.palette.primary.contrastText,
    },
    '&:focus': {
      bgcolor: 'transparent',
    },
  },
});

export default createModalStyles;
