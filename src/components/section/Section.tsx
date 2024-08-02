import { Box, Button } from '@mui/material';
import { MovieCard } from '../movieCard/MovieCard';

export const Section = () => {
  return (
    <Box sx={{ width: '100%', bgcolor: '#12161a' }}>
      <Box display="flex" justifyContent="space-between" sx={{ borderBottom: '1px solid #89a' }}>
        <Button
          sx={{
            color: '#89a',
            ':hover': {
              color: '#FFFF',
            },
          }}
          disableRipple
        >
          POPULAR REVIEWS THIS WEEK
        </Button>
        <Button
          sx={{
            color: '#89a',
            ':hover': {
              color: '#FFFF',
            },
          }}
          disableRipple
        >
          MORE
        </Button>
      </Box>
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </Box>
  );
};
