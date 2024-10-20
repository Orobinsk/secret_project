import { Button, Grid, Rating, Typography } from '@mui/material';
import Avatar from '../../../assets/nophoto.png';
import { MovieDetails } from '../../../types/movieTypes';

interface IMovieReviews {
  movie: MovieDetails;
}

export const MovieReviews: React.FC<IMovieReviews> = ({ movie }) => {
  const cutArr = movie.reviews.results.slice(0, 3);

  return (
    <Grid container direction="column">
      {movie.reviews.results.length > 0 && (
        <Grid
          container
          justifyContent="space-between"
          sx={{ borderBottom: '1px solid #89a', mb: 2 }}
        >
          <Grid item>
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
          </Grid>
          <Grid item>
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
          </Grid>
        </Grid>
      )}
      <Grid container direction="column">
        {cutArr.map((review) => (
          <Grid key={review.id} container direction="row" alignItems="flex-start" mb={2}>
            <Grid item>
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
            </Grid>
            <Grid item xs ml={2}>
              <Typography color="#9ab">Review by {review.author_details.username}</Typography>
              <Rating readOnly value={review.author_details.rating / 2} sx={{ color: '#00e054' }} />
              <Typography color="#9ab" mt={1}>
                {review.content.replace(/<[^>]*>/g, '')}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};
