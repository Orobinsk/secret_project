import { Grid, Pagination, PaginationItem, Rating, Typography } from '@mui/material';
import Avatar from '../../../assets/nophoto.png';
import { MovieDetails } from '../../../types/movieTypes';
import { ChangeEvent, FC, useContext, useEffect, useState } from 'react';
import { ImageConfig } from '../../../providers/ImageConfigProvider/ImageConfigContexts';
import { API_PARAMS, imageSizes, MOVIE_ENDPOINTS } from '../../../constants';
import { getMovie } from '../../../api/api';

interface IMovieReviews {
  id: MovieDetails['id'];
  reviews: MovieDetails['reviews'];
}

export const MovieReviews: FC<IMovieReviews> = ({ id, reviews }) => {
  const [allReviews, setAllReviews] = useState<MovieDetails['reviews'] | undefined>(reviews);
  const [page, setPage] = useState<number | null>(null);
  const imageConfig = useContext(ImageConfig);

  const handleChangePage = (e: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    if (id && page) {
      getMovie({
        id,
        endpoint: MOVIE_ENDPOINTS.REVIEW,
        params: { [API_PARAMS.PAGE]: page },
      }).then((data) => {
        setAllReviews(data);
      });
    }
  }, [id, page]);

  return (
    <Grid container direction="column" borderTop="1px solid" borderColor="primary.main" mt={2}>
      <Grid container direction="column" mt={1}>
        {allReviews?.results &&
          allReviews.results.map((review) => (
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
      {allReviews && allReviews?.total_pages > 1 && (
        <Grid item>
          <Pagination
            count={allReviews?.total_pages}
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
