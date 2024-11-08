import { Box, Grid, Pagination, Typography, useTheme } from '@mui/material';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { getMovieList } from '../../api/api';
import { IMovieDiscover } from '../../types/movieTypes';
import { IResponseList } from '../../api/apiTypes/apiTypes';
import { API_MOVIE_LIST_PARAMS, imageSizes, SORT_BY_OPTIONS } from '../../constants';
import { ImageConfig } from '../../providers/ImageConfigProvider/ImageConfigContexts';
import { Link as RouterLink } from 'react-router-dom';
import { createReleaseCalendarStyles } from './createReleaseCalendarStyles';
import Noimg from '../../assets/noimg.svg';

const MONTHNAMES = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const currentYear = new Date().getFullYear();
const releaseDate = new Date().toISOString().split('T')[0];

export const ReleaseCalendar = () => {
  const imageConfig = useContext(ImageConfig);
  const [movieList, setMovieList] = useState<IResponseList<IMovieDiscover[]>>();
  const [page, setPage] = useState(1);

  const handleChange = (event: ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };
  const theme = useTheme();
  const styles = createReleaseCalendarStyles(theme);

  useEffect(() => {
    getMovieList({
      params: {
        [API_MOVIE_LIST_PARAMS.PRIMARY_RELEASE_DATE]: releaseDate,
        [API_MOVIE_LIST_PARAMS.PAGE]: page,
        [API_MOVIE_LIST_PARAMS.YEAR]: currentYear,
        [API_MOVIE_LIST_PARAMS.SORT_BY]: `${SORT_BY_OPTIONS.PRIMARY_RELEASE_DATE_ASC},${SORT_BY_OPTIONS.POPULARITY_ASC}`,
      },
    }).then((data) => {
      setMovieList(data);
    });
  }, [page]);

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Grid container spacing={1} mt={2} justifyContent="flex-start" alignItems="flex-start">
        <Grid item xs={12}>
          <Typography sx={styles.releaseHeader}>NEXT BIG RELEASES</Typography>
        </Grid>

        {movieList?.results.slice(0, 10).map((movie, index) => {
          const releaseDate = movie?.release_date;
          const month = releaseDate ? releaseDate.split('-')[1] : '';
          const day = releaseDate ? releaseDate.split('-')[2] : '';
          const monthName = month ? MONTHNAMES[Number(month) - 1] : '';

          return (
            <Grid item xs={12} sm={6} key={movie.id}>
              <Grid container spacing={1} sx={styles.paperStyles}>
                <Grid item xs={10} sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography sx={styles.typographyStyles}>
                    {(page - 1) * 10 + index + 1}.
                  </Typography>
                  <RouterLink to={`/film/${movie.id}`} style={{ textDecoration: 'none' }}>
                    {movie.poster_path ? (
                      <img
                        src={`${imageConfig.images.secure_base_url}${imageSizes.verySmall}${movie.poster_path}`}
                        alt="no poster"
                        style={styles.imgStyles}
                      />
                    ) : (
                      <Noimg style={styles.imgStyles} />
                    )}
                  </RouterLink>
                  <RouterLink to={`/film/${movie.id}`} style={{ textDecoration: 'none' }}>
                    <Typography sx={styles.movieTitle}>{movie.title.toUpperCase()}</Typography>
                  </RouterLink>
                </Grid>

                <Grid item xs={2} sx={styles.releaseDateContainer}>
                  <Typography variant="body2" sx={styles.releaseDay}>
                    {day}
                  </Typography>
                  <Typography variant="body2" sx={styles.releaseMonth}>
                    {monthName.toUpperCase()}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          );
        })}
      </Grid>
      <Box pt={1}>
        <Pagination
          count={movieList?.total_pages}
          page={page}
          color="primary"
          onChange={handleChange}
          size="small"
        />
      </Box>
    </Box>
  );
};
