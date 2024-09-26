import { Box, Typography } from '@mui/material';
import { IMovie } from '../../api/apiTypes';

interface MovieDescProps {
  mDesc: IMovie;
}

export const MovieDesc: React.FC<MovieDescProps> = ({ mDesc }) => {
  const getYear = mDesc.release_date?.slice(0, 4);

  return (
    <>
      <Box display="flex" alignItems="center">
        <Typography variant="h4" sx={{ color: '#fff' }} margin="10px">
          {mDesc.title}
        </Typography>
        <Typography variant="h5" sx={{ color: '#9ab' }} margin="10px">
          {getYear}
        </Typography>
        <Typography variant="h5" sx={{ color: '#9ab' }} margin="10px">
          Directed by
        </Typography>
      </Box>
      <Typography variant="h5" sx={{ color: '#fff' }} margin="10px">
        {mDesc.tagline}
      </Typography>
      <Box margin="10px">
        <Typography sx={{ color: '#9ab', fontSize: '26px' }}>{mDesc.overview}</Typography>
      </Box>
    </>
  );
};
