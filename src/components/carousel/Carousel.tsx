import { Box, Button, Grid, IconButton, Tooltip } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useEffect, useState } from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import StarsIcon from '@mui/icons-material/Stars';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { getMovieList } from '../../api/api';
import { IMovie, IResponseList } from '../../api/apiTypes';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import createCarouselStyles from './createCarouselStyles';
export const Carousel = () => {
  const [movieList, setMovieList] = useState<IResponseList<IMovie[]>>();

  const theme = useTheme();
  const styles = createCarouselStyles(theme);

  useEffect(() => {
    getMovieList().then((data) => setMovieList(data));
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;
  const totalMovies = movieList?.results.length;

  const handleNext = () => {
    if (currentIndex < movieList.results.length)
      setCurrentIndex((prevIndex) => (prevIndex + 4 + totalMovies) % totalMovies);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 4 + totalMovies) % totalMovies);
  };

  const visibleMovies = movieList?.results
    ? [...movieList.results, ...movieList.results].slice(currentIndex, currentIndex + itemsPerPage)
    : [];

  const HeaderButtons = () => (
    <Grid container justifyContent="space-between" borderBottom="1px solid #89a">
      <Grid item>
        <Button sx={styles.headerBtnStyles}>POPULAR FILMS THIS WEEK</Button>
      </Grid>
      <Grid item>
        <Button sx={styles.headerBtnStyles}>MORE</Button>
      </Grid>
    </Grid>
  );
  const ForwardButton = () => (
    <Grid item>
      <IconButton
        onClick={handleNext}
        data-testid="carousel-slide-next"
        sx={{
          color: theme.palette.primary.main,
        }}
      >
        <ArrowForwardIosIcon />
      </IconButton>
    </Grid>
  );
  const BackButton = () => (
    <Grid item>
      <IconButton
        onClick={handlePrev}
        data-testid="carousel-slide-previous"
        sx={{
          color: theme.palette.primary.main,
        }}
      >
        <ArrowBackIosIcon />
      </IconButton>
    </Grid>
  );

  const MovieGrid = () => (
    <Grid item xs={10}>
      <Grid container spacing={2} justifyContent="center">
        {visibleMovies.map((movie, i) => (
          <Grid item key={i} sx={{ width: '240px', height: '350px' }}>
            <Box sx={styles.movieGridStyles}>
              <RouterLink to={`/film/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt=""
                  key={movie.id}
                  data-testid={`movie-poster-${movie.id}`}
                  style={styles.carouselImage}
                />
              </RouterLink>
              <Grid container justifyContent="center" padding="5px">
                <Tooltip
                  title={`Watched by ${Math.round(movie?.popularity)} members`}
                  placement="top"
                >
                  <IconButton sx={{ color: 'green' }}>
                    <RemoveRedEyeIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip
                  title={`Average rating ${movie?.vote_average?.toFixed(1)}`}
                  placement="top"
                >
                  <IconButton sx={{ color: '#40bcf4' }}>
                    <StarsIcon />
                  </IconButton>
                </Tooltip>
                <Tooltip title={`Liked by ${movie?.vote_count} members`} placement="top">
                  <IconButton sx={{ color: 'orange' }}>
                    <FavoriteIcon />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
  return (
    <Box paddingBottom="40px">
      <HeaderButtons />
      <Grid container justifyContent="space-between" alignItems="center">
        <BackButton />
        <MovieGrid />
        <ForwardButton />
      </Grid>
    </Box>
  );
};
