import { Box, Button, Rating, Typography } from '@mui/material';
import { MovieDetails } from '../../../api/apiTypes';
import Avatar from '../../../assets/nophoto.png';

interface IMovieReviews {
  movie: MovieDetails;
}

export const MovieReviews: React.FC<IMovieReviews> = ({ movie }) => {
  const cutArr = movie.reviews.results.slice(0, 3);

  return (
    <Box display="flex" flexDirection="column">
      {movie.reviews.results.length > 0 && (
        <Box display="flex" justifyContent="space-between" borderBottom="1px solid #89a" mb={2}>
          <Button
            sx={{
              color: '#89a',
              ':hover': {
                color: '#FFFF',
              },
            }}
            disableRipple
          >
            Popular reviews
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
      )}
      <Box>
        {cutArr.map((review) => (
          <Box key={review.id} display="flex" flexDirection="row" mb={2}>
            <Box>
              <img
                src={
                  review.author_details.avatar_path
                    ? `https://image.tmdb.org/t/p/original/${review.author_details.avatar_path}`
                    : Avatar
                }
                alt="Avatar"
                style={{
                  width: 50,
                  height: 50,
                  objectFit: 'cover',
                  borderRadius: '50%',
                }}
              />
            </Box>
            <Box ml={2}>
              <Typography color="#9ab">Review by {review.author_details.username}</Typography>
              <Rating readOnly value={review.author_details.rating / 2} sx={{ color: '#00e054' }} />
              <Typography color="#9ab" mt={1}>
                {review.content.replace(/<[^>]*>/g, '')}
              </Typography>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
