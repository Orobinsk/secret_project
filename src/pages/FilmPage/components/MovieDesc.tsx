import { Box, Skeleton, Typography, useTheme } from '@mui/material';
import { MovieDetails } from '../../../types/movieTypes';
import { FC } from 'react';

interface IMovieDesc {
  movie?: MovieDetails;
}

export const MovieDesc: FC<IMovieDesc> = ({ movie }) => {
  const getYear = movie?.release_date.slice(0, 4);
  const theme = useTheme();

  return (
    <>
      <Box display="flex" alignItems="center">
        <Typography fontSize="35px" sx={{ color: theme.palette.text.primary }} mr={2}>
          {movie?.original_title ? movie?.original_title : <Skeleton width={150} />}
        </Typography>
        <Typography fontSize="20px" sx={{ color: theme.palette.text.secondary }}>
          {getYear ? getYear : <Skeleton width={45} />}
        </Typography>
      </Box>
      <Typography fontSize="20px" sx={{ color: theme.palette.text.primary }}>
        {movie?.tagline ? movie?.tagline : <Skeleton width={300} />}
      </Typography>

      <Typography fontSize="20px" sx={{ color: theme.palette.text.secondary }}>
        {movie?.overview ? (
          movie?.overview
        ) : (
          <>
            <Skeleton width="100%" height="24px" />
            <Skeleton width="100%" height="24px" />
            <Skeleton width="100%" height="24px" />
          </>
        )}
      </Typography>
    </>
  );
};
