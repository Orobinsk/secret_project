import { DialogContent, IconButton } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import ClearIcon from '@mui/icons-material/Clear';
import { useTheme } from '@mui/material/styles';
import { IPoster } from '../../api/apiTypes';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useEffect, useState } from 'react';
import createModalStyles from './createModalStyles';

export const PosterModal = ({
  open,
  handleClose,
  posters,
}: {
  open: boolean;
  handleClose: () => void;
  posters: IPoster[];
}) => {
  const theme = useTheme();
  const styles = createModalStyles(theme);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < posters.length - 1 ? prevIndex + 1 : posters.length - 1,
    );
  };

  const handleBack = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : 0));
  };
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'ArrowRight') {
      handleNext();
    } else if (event.key === 'ArrowLeft') {
      handleBack();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const ForwardButton = () => (
    <IconButton onClick={handleNext} sx={{ ...styles.buttonStyles, right: 10 }}>
      <ArrowForwardIosIcon />
    </IconButton>
  );

  const BackButton = () => (
    <IconButton onClick={handleBack} sx={{ ...styles.buttonStyles, left: 10 }}>
      <ArrowBackIosIcon />
    </IconButton>
  );

  const ModalContent = () => {
    return (
      <DialogContent sx={styles.dialogContentStyles}>
        <IconButton onClick={handleClose} sx={styles.modalBtn}>
          <ClearIcon />
        </IconButton>

        {posters.length > 0 && (
          <img
            src={`https://image.tmdb.org/t/p/original/${posters[currentIndex].file_path}`}
            alt="Poster"
            style={styles.modalImage}
          />
        )}
      </DialogContent>
    );
  };

  return (
    <Dialog open={open} onClose={handleClose} sx={styles.dialogStyles}>
      {posters.length <= 1 ? null : <BackButton />}
      <ModalContent />
      {posters.length <= 1 ? null : <ForwardButton />}
    </Dialog>
  );
};
