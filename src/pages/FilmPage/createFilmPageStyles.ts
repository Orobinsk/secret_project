import { theme } from '../../providers/theme/theme';

export const createFilmPageStyles = () => ({
  labelButton: (isActive: boolean) => ({
    border: '1px solid #11171B',
    fontSize: '15px',
    color: isActive ? 'white' : '#00e054',
    borderRadius: 0,
    '&:hover': { borderBottom: '1px solid #9ab' },
  }),
  container: {
    marginTop: '300px',
    position: 'relative',
    [theme.breakpoints.down('md')]: {
      marginTop: '0px',
    },
  },
  backdrop: {
    height: '400px',
    overflow: 'hidden',
    position: 'absolute',
    zIndex: -1000,
    top: -400,
    left: 0,
    right: 0,
    [theme.breakpoints.down('md')]: {
      display: 'none',
    },
  },
  backdropImage: {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    position: 'relative',
    top: '70%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    maskImage:
      'linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.4) 30%, rgba(255, 255, 255, 1) 70%, rgba(255, 255, 255, 0) 100%)',
    WebkitMaskImage:
      'linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.4) 30%, rgba(255, 255, 255, 1) 70%, rgba(255, 255, 255, 0) 100%)',
    maskSize: '100% 100%',
    WebkitMaskSize: '100% 100%',
  } as React.CSSProperties,
  previewWrapper: {
    position: 'relative',
    width: '100%',
    cursor: 'pointer',
  },
  playPreviewIcon: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color: 'secondary.dark',
    fontSize: '50px',
  },
});
