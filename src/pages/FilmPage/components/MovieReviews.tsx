import { Button, Grid, Rating, Typography } from '@mui/material';
import Avatar from '../../../assets/nophoto.png';
import { MovieDetails } from '../../../types/movieTypes';
import { FC, useContext } from 'react';
import { ImageConfig } from '../../../providers/ImageConfigProvider/ImageConfigContexts';
import { imageSizes } from '../../../constants';

interface IMovieReviews {
  movie: MovieDetails;
}

export const MovieReviews: FC<IMovieReviews> = ({ movie }) => {
  const cutArr = movie.reviews?.results.slice(0, 3);
  const imageConfig = useContext(ImageConfig);

  return (
    <Grid container direction="column">
      {movie.reviews && movie.reviews.results.length > 0 && (
        <Grid
          container
          justifyContent="space-between"
          sx={{ borderBottom: '1px solid #89a', mb: 2 }}
        >
          <Grid item>
            <Button
              sx={{
                fontSize: '15px',
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
                fontSize: '15px',
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
        {cutArr &&
          cutArr.map((review) => (
            <Grid key={review.id} container direction="row" alignItems="flex-start" mb={2}>
              <Grid item>
                <img
                  src={
                    review.author_details.avatar_path
                      ? `${imageConfig.images.secure_base_url}${imageSizes.small}${review.author_details.avatar_path}`
                      : Avatar
                  }
                  alt="Avatar"
                  style={{
                    width: '50px',
                    height: '50px',
                    objectFit: 'cover',
                    borderRadius: '50%',
                  }}
                />
              </Grid>
              <Grid item xs ml={2}>
                <Typography color="#9ab">Review by {review.author_details.username}</Typography>
                <Rating
                  readOnly
                  value={review.author_details.rating / 2}
                  sx={{ color: '#00e054' }}
                />
                <Typography color="#9ab" sx={{ fontSize: '15px' }} mt={1}>
                  {review.content.replace(/<[^>]*>/g, '')}
                </Typography>
              </Grid>
            </Grid>
          ))}
      </Grid>
    </Grid>
  );
};
