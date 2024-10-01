import { Box, Typography } from '@mui/material';

interface MovieDescProps {
  title: string;
  overview: string;
  release_date: string;
  tagline: string;
}

export const MovieDesc: React.FC<MovieDescProps> = ({ mDesc }) => {
  const getYear = mDesc.release_date?.slice(0, 4);

  return (
    <>
      <Box display="flex" alignItems="center">
        <Typography variant="h5" sx={{ color: '#fff' }} margin="10px">
          {mDesc.title}
        </Typography>
        <Typography variant="h7" sx={{ color: '#9ab' }} margin="10px">
          {getYear}
        </Typography>
        <Typography variant="h7" sx={{ color: '#9ab' }} margin="10px">
          Directed by
        </Typography>
      </Box>
      <Typography variant="h7" sx={{ color: '#fff' }} margin="10px">
        {mDesc.tagline}
      </Typography>
      <Box margin="10px">
        <Typography variant="h6" color="#9ab">
          {mDesc.overview}
        </Typography>
      </Box>
    </>
  );
};
