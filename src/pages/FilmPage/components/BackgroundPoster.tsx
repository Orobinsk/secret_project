import { Box } from '@mui/material';

export const BackgroundPoster = ({ poster }) => {
  return (
    <Box width="100vw">
      <img
        src={`https://image.tmdb.org/t/p/original/${poster}`}
        alt=""
        height="600px"
        width="100%"
        style={{ position: 'relative', zIndex: 1 }}
      />
    </Box>
  );
};
