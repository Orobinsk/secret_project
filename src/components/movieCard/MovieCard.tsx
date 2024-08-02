import { Avatar, Box, CardMedia, IconButton, Rating, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';

export const MovieCard = () => {
  return (
    <Card
      variant="outlined"
      sx={{
        bgcolor: '#12161a',
        display: 'flex',
        borderBottom: '1px solid #89a',
        borderRadius: 0,
      }}
    >
      <CardMedia
        component="img"
        sx={{ height: 150, width: 80, borderRadius: 1, margin: '10px' }}
        image="https://m.media-amazon.com/images/M/MV5BODExYTM0MzEtZGY2Yy00N2ExLTkwZjItNGYzYTRmMWZlOGEzXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg"
        alt="Movie Poster"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', p: 1, flexGrow: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Typography sx={{ fontSize: 29, color: '#ffffff', fontWeight: 'bold' }} gutterBottom>
            Twisters
          </Typography>
          <Typography sx={{ fontSize: 18, color: '#89a', ml: 1 }} gutterBottom>
            2024
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Avatar sx={{ bgcolor: 'green', mr: 1 }}>R</Avatar>
          <Typography sx={{ fontSize: 14, color: '#ffffff', mr: 1 }}>mbrita</Typography>
          <Rating size="small" sx={{ color: 'green' }} />
          <IconButton sx={{ color: 'orange' }} disableRipple>
            <FavoriteIcon />
          </IconButton>
          <IconButton sx={{ color: '#ffffff' }} disableRipple>
            <CommentIcon />
          </IconButton>
        </Box>
        <Typography sx={{ fontSize: 14, color: '#89a' }}>
          guys will say they know a spot and then drive you into a tornado
        </Typography>
      </Box>
    </Card>
  );
};
