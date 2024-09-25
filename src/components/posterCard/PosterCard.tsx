import { Box, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import GridViewIcon from '@mui/icons-material/GridView';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';

export const PosterCard = ({ posterPath, showBorder = true }) => {
  return (
    <Box
      sx={{
        border: '2px solid black',
        borderRadius: '10px',
        '&:hover': showBorder ? { border: '2px solid #00e054' } : { border: '2px solid #12161a' },
        width: '236px',
        height: '351px',
      }}
      margin="10px 5px"
    >
      <Box>
        <img
          src={`https://image.tmdb.org/t/p/original/${posterPath}`}
          alt="/"
          style={{ width: '100%', height: '100%', borderRadius: '10px' }}
        />
      </Box>
      <Box display="flex" justifyContent="center" padding="5px">
        <IconButton sx={{ color: 'green' }}>
          <RemoveRedEyeIcon />
        </IconButton>
        <IconButton sx={{ color: '#40bcf4' }}>
          <GridViewIcon />
        </IconButton>
        <IconButton sx={{ color: 'orange' }}>
          <FavoriteIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
