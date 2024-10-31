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
        <Typography fontSize="35px" sx={{ color: theme.palette.text.primary }} mr={2}>
          {movie?.original_title}
        </Typography>
        <Typography fontSize="20px" sx={{ color: theme.palette.text.secondary }}>
          {getYear}
        </Typography>
      </Box>
      <Typography fontSize="20px" sx={{ color: theme.palette.text.primary }}>
        {movie?.tagline}
      </Typography>

      <Typography fontSize="20px" sx={{ color: theme.palette.text.secondary }}>
        {movie?.overview}
      </Typography>
    </>
  );
};
