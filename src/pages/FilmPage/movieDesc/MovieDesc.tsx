import { Box, Typography } from '@mui/material';
import { MovieDetails } from '../../../api/apiTypes';

interface IMovieDesc {
  movie: MovieDetails;
}

export const MovieDesc: React.FC<IMovieDesc> = ({ movie }) => {
  const getYear = movie?.release_date.slice(0, 4);

  return (
    <>
      <Box display="flex" alignItems="center">
        <Typography variant="h5" sx={{ color: '#fff' }} margin="10px">
          {movie?.original_title}
        </Typography>
        <Typography variant="h7" sx={{ color: '#9ab' }} margin="10px">
          {getYear}
        </Typography>
      </Box>
      <Typography variant="h7" sx={{ color: '#fff' }} margin="10px">
        {movie?.tagline}
      </Typography>
      <Box margin="10px">
        <Typography variant="h6" color="#9ab">
          {movie?.overview}
        </Typography>
      </Box>
    </>
  );
};
