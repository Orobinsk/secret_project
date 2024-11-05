import { theme } from '../../../../providers/theme/theme';

export const movieTrailerModalStyles = (isActive?: boolean) => ({
  dialog: {
    backdropFilter: 'blur(2px)',
    '& .MuiDialog-paper': {
      backgroundColor: theme.palette.background.default,
    },
  },
  modalWrapper: {
    height: { sm: '80vh' },
    overflow: { xs: 'hidden' },
    position: 'relative',
  },
  playerWrapper: {
    aspectRatio: { xs: '16/9', sm: 'auto' },
  },
  trailerListWrapper: {
    height: '100%',
    overflowY: 'auto',
  },
  trailerWrapper: {
    position: 'relative',
    width: '100%',
    cursor: 'pointer',
    border: `4px solid ${isActive ? theme.palette.secondary.light : theme.palette.background.default}`,
  },
  playPreviewIcon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'secondary.dark',
    fontSize: '50px',
  },
  modalBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
    height: '20px',
    zIndex: 100,
    color: theme.palette.primary.light,
    '&:hover': {
      color: theme.palette.primary.contrastText,
    },
  },
});
