import { Box, CardMedia, IconButton, Rating, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import { IMovie } from '../../api/apiTypes';

interface MovieListProps {
  movie: IMovie;
}
export const MovieItem: React.FC<MovieListProps> = ({ movie }) => {
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
        height="150px"
        sx={{ width: 80, height: 150, borderRadius: 1, margin: '10px', objectFit: 'cover' }}
        image={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
            : 'https://via.placeholder.com/80x150?text=No+Image'
        }
        alt={`${movie.title} Poster`}
      />
      <Box display="flex" flexDirection="column" flexGrow="1" sx={{ p: 1 }}>
        <Box display="flex" alignItems="center">
          <Typography color="#ffffff" fontWeight="bold" sx={{ fontSize: 29 }} gutterBottom>
            {movie.title}
          </Typography>
          <Typography color="#89a" sx={{ fontSize: 18, ml: 1 }} gutterBottom>
            {movie.release_date}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Rating
            size="small"
            sx={{ color: 'green' }}
            value={Math.min(movie.popularity / 20, 5)}
            readOnly
          />
          <Typography sx={{ fontSize: 14, color: '#ffffff', mr: 1 }}>{movie.popularity}</Typography>
          <IconButton sx={{ color: 'orange' }} disableRipple>
            <FavoriteIcon />
          </IconButton>
          <IconButton sx={{ color: '#ffffff' }} disableRipple>
            <CommentIcon />
          </IconButton>
        </Box>
        <Typography sx={{ fontSize: 14, color: '#89a' }}>{movie.overview}</Typography>
      </Box>
    </Card>
  );
};
