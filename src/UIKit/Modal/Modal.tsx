import { Grow, DialogContent, IconButton } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import ClearIcon from '@mui/icons-material/Clear';
import { Theme, useTheme } from '@mui/material/styles';
import { Poster } from '../../api/apiTypes';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState } from 'react';

const createStyles = (theme: Theme) => ({
  dialogStyles: {
    display: 'flex',
    justifyContent: 'center',
    bgcolor: 'transparent',
    backdropFilter: 'blur(2px)',
  },
  dialogContentStyles: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    padding: 0,
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
  leftButton: {
    position: 'absolute',
    left: 10,
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
  rightButton: {
    position: 'absolute',
    right: 10,
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

export const Modal = ({
  open,
  handleClose,
  posters,
}: {
  open: boolean;
  handleClose: () => void;
  posters: Poster[];
}) => {
  const theme = useTheme();
  const styles = createStyles(theme);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < posters.length - 1 ? prevIndex + 1 : posters.length - 1,
    );
  };

  const handleBack = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const ForwardButton = () => (
    <IconButton onClick={handleNext} data-testid="carousel-slide-next" sx={styles.rightButton}>
      <ArrowForwardIosIcon />
    </IconButton>
  );

  const BackButton = () => (
    <IconButton onClick={handleBack} data-testid="carousel-slide-previous" sx={styles.leftButton}>
      <ArrowBackIosIcon />
    </IconButton>
  );

  const ModalContent = () => {
    return (
      <DialogContent
        sx={{
          ...styles.dialogContentStyles,
          bgcolor: 'transparent',
          padding: 0,
        }}
      >
        <IconButton onClick={handleClose} sx={styles.modalBtn}>
          <ClearIcon />
        </IconButton>
        <Grow in timeout={500}>
          {posters.length > 0 && (
            <img
              src={`https://image.tmdb.org/t/p/original/${posters[currentIndex].file_path}`}
              alt="Poster"
              style={styles.modalImage}
            />
          )}
        </Grow>
      </DialogContent>
    );
  };

  return (
    <Dialog open={open} onClose={handleClose} sx={styles.dialogStyles}>
      <BackButton />
      <ModalContent />
      <ForwardButton />
    </Dialog>
  );
};
