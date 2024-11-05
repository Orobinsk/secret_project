import { Box, Dialog, Grid, IconButton, useMediaQuery } from '@mui/material';
import { MovieTrailer } from '../../../../components/MovieTrailer/MovieTrailer';
import { ITrailer } from '../../../../types/movieTypes';
import { theme } from '../../../../providers/theme/theme';
import { useState } from 'react';
import { movieTrailerModalStyles } from './movieTrailerModalStyles';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import ClearIcon from '@mui/icons-material/Clear';

interface IMovieTrailerModal {
  open: boolean;
  onClose: () => void;
  trailers: ITrailer[];
}

export const MovieTrailerModal = ({ open, onClose, trailers }: IMovieTrailerModal) => {
  const smSize = useMediaQuery(theme.breakpoints.down('sm'));
  const [activeTrailer, setActiveTrailer] = useState(trailers[0]);
  const [loadedTrailers, setLoadedTrailers] = useState<Record<string, boolean>>({});
  const styles = movieTrailerModalStyles();

  const handleLoad = (key: string) => {
    setLoadedTrailers((prev) => ({ ...prev, [key]: true }));
  };
  const handleClose = () => {
    setLoadedTrailers({});
    onClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      fullScreen={smSize}
      maxWidth="xl"
      fullWidth
      sx={styles.dialog}
    >
      <Grid container sx={styles.modalWrapper}>
        <IconButton onClick={handleClose} sx={styles.modalBtn}>
          <ClearIcon />
        </IconButton>
        <Grid item xs={12} sm={8} sx={styles.playerWrapper}>
          <MovieTrailer youtubeKey={activeTrailer.key} autoplay />
        </Grid>
        <Grid item xs={12} sm={4} sx={styles.trailerListWrapper}>
          {trailers.map((trailer) => {
            const isActive = activeTrailer.key === trailer.key;
            const trailerStyles = movieTrailerModalStyles(isActive);

            return (
              <Box
                key={trailer.key}
                sx={trailerStyles.trailerWrapper}
                onClick={() => setActiveTrailer(trailer)}
              >
                <img
                  src={`https://img.youtube.com/vi/${trailer.key}/hqdefault.jpg`}
                  alt="Movie Trailer Poster"
                  onLoad={() => handleLoad(trailer.key)}
                  style={{ width: '100%', display: 'block' }}
                />
                {loadedTrailers[trailer.key] && (
                  <PlayCircleOutlineIcon sx={trailerStyles.playPreviewIcon} />
                )}
              </Box>
            );
          })}
        </Grid>
      </Grid>
    </Dialog>
  );
};
