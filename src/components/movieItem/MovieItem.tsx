import { Box, CardMedia, IconButton, Rating, Theme, Typography, useTheme } from '@mui/material';
import Card from '@mui/material/Card';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import { IMovieDiscover } from '../../types/movieTypes';

interface MovieListProps {
  movie: IMovieDiscover;
}
const createStyles = (theme: Theme) => ({
  card: {
    bgcolor: '#12161a',
    display: 'flex',
    borderBottom: `1px solid ${theme.palette.primary.main}`,
    borderRadius: 0,
  },
  cardMedia: {
    width: 80,
    height: 150,
    borderRadius: 1,
    margin: '10px',
    objectFit: 'cover',
  },
});

export const MovieItem: React.FC<MovieListProps> = ({ movie }) => {
  const theme = useTheme();
  const styles = createStyles(theme);

  return (
    <Card variant="outlined" sx={styles.card}>
      <CardMedia
        component="img"
        sx={styles.cardMedia}
        image={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
            : 'https://via.placeholder.com/80x150?text=No+Image'
        }
        alt={`${movie.title} Poster`}
      />
      <Box display="flex" flexDirection="column" flexGrow="1" p={1}>
        <Box display="flex" alignItems="center">
          <Typography color="primary.light" fontWeight="bold" fontSize={29} gutterBottom>
            {movie.title}
          </Typography>
          <Typography color="primary.main" fontSize={18} ml={1} gutterBottom>
            {movie.release_date}
          </Typography>
        </Box>
        <Box display="flex" alignItems="center" mb={1}>
          <Rating
            size="small"
            sx={{ color: 'green' }}
            value={Math.min(movie.popularity / 20, 5)}
            readOnly
          />
          <Typography color="primary.light" fontSize={14} mr={1}>
            {movie.popularity}
          </Typography>
          <IconButton sx={{ color: 'orange' }}>
            <FavoriteIcon />
          </IconButton>
          <IconButton sx={{ color: 'primary.light' }}>
            <CommentIcon />
          </IconButton>
        </Box>
        <Typography color="primary.main" fontSize={14}>
          {movie.overview}
        </Typography>
      </Box>
    </Card>
  );
};
