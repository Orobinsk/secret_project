import { Theme } from '@mui/material/styles';

const modalStyles = (theme: Theme) => ({
  dialogStyles: {
    display: 'flex',
    justifyContent: 'center',
    backdropFilter: 'blur(2px)',
    width: '100%',
    height: '100%',
    bgcolor: 'transparent',
    '& .MuiPaper-root': {
      bgcolor: 'transparent',
    },
  },
  dialogContentStyles: {
    padding: 0,
    overflow: 'hidden',
    height: `86vh`,
  },
  modalImage: {
    maxWidth: '100%',
    height: '100%',
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

export default modalStyles;
