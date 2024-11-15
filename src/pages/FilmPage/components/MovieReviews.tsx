import { Button, Grid, Pagination, PaginationItem, Rating, Typography } from '@mui/material';
import Avatar from '../../../assets/nophoto.png';
import { IReviewDetails, MovieDetails } from '../../../types/movieTypes';
import { ChangeEvent, FC, useContext, useEffect, useState } from 'react';
import { ImageConfig } from '../../../providers/ImageConfigProvider/ImageConfigContexts';
import { API_PARAMS, imageSizes, MOVIE_ENDPOINTS } from '../../../constants';
import { getMovie } from '../../../api/api';
import { IResponseList } from '../../../api/apiTypes/apiTypes';

interface IMovieReviews {
  movie: MovieDetails;
}

export const MovieReviews: FC<IMovieReviews> = ({ movie }) => {
  const [reviews, setReviews] = useState<IResponseList<IReviewDetails[]> | undefined>(
    movie.reviews,
  );
  const [page, setPage] = useState<number | null>(null);
  const imageConfig = useContext(ImageConfig);

  const handleChangePage = (e: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    if (movie.id && page) {
      getMovie({
        id: movie.id,
        endpoint: MOVIE_ENDPOINTS.REVIEW,
        params: { [API_PARAMS.PAGE]: page },
      }).then((data) => {
        setReviews(data);
      });
    }
  }, [movie.id, page]);

  return (
    <Grid container direction="column">
      {reviews?.results && reviews.results.length > 0 && (
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
        {reviews?.results &&
          reviews.results.map((review) => (
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
      {reviews && reviews?.total_pages > 1 && (
        <Grid item>
          <Pagination
            count={reviews?.total_pages}
            page={Number(page) || 1}
            color="primary"
            onChange={handleChangePage}
            size="large"
            renderItem={(item) => {
              if (item.type === 'previous' || item.type === 'next') {
                return <PaginationItem {...item} />;
              }
              return null;
            }}
          />
        </Grid>
      )}
    </Grid>
  );
};
