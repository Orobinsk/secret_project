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
        <Typography sx={{ fontSize: '4rem', color: theme.palette.text.primary }} margin="1rem">
          {movie?.original_title}
        </Typography>
        <Typography sx={{ fontSize: '4rem', color: theme.palette.text.secondary }} margin="1rem">
          {getYear}
        </Typography>
      </Box>
      <Typography
        variant="h6"
        sx={{ fontSize: '3.5rem', fontStyle: 'oblique', color: theme.palette.text.secondary }}
        margin="1rem"
      >
        «{movie?.tagline}»
      </Typography>
      <Box margin="1rem">
        <Typography sx={{ fontSize: '3rem', color: theme.palette.text.secondary }}>
          {movie?.overview}
        </Typography>
      </Box>
    </>
  );
};
