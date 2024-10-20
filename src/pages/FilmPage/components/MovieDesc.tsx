import { Box, Typography, useTheme } from '@mui/material';
import { MovieDetails } from '../../../types/movieTypes';

interface IMovieDesc {
  movie: MovieDetails;
}

export const MovieDesc: React.FC<IMovieDesc> = ({ movie }) => {
  const getYear = movie?.release_date.slice(0, 4);
  const theme = useTheme();

  return (
    <>
      <Box display="flex" alignItems="center">
        <Typography variant="h5" sx={{ color: theme.palette.text.primary }} margin="10px">
          {movie?.original_title}
        </Typography>
        <Typography variant="h6" sx={{ color: theme.palette.text.secondary }} margin="10px">
          {getYear}
        </Typography>
      </Box>
      <Typography variant="h6" sx={{ color: theme.palette.text.primary }} margin="10px">
        {movie?.tagline}
      </Typography>
      <Box margin="10px">
        <Typography variant="h6" color={theme.palette.text.secondary}>
          {movie?.overview}
        </Typography>
      </Box>
    </>
  );
};
