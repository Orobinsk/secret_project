import { Box, Button, Grid, IconButton, Tooltip } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useEffect, useState } from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import StarsIcon from '@mui/icons-material/Stars';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { getMovieList } from '../../api/api';
import { IResponseList } from '../../api/apiTypes/apiTypes';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
import { IMovieDiscover } from '../../types/movieTypes';
import { createCarouselStyles } from './createCarouselStyles';
export const Carousel = () => {
  const [movieList, setMovieList] = useState<IResponseList<IMovieDiscover[]>>();

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

  const iconsData = [
    {
      title: (movie: IMovieDiscover) => `Watched by ${Math.round(movie?.popularity)} members`,
      color: 'green',
      icon: <RemoveRedEyeIcon style={{ height: '3rem', width: '3rem' }} />,
    },
    {
      title: (movie: IMovieDiscover) => `Average rating ${movie?.vote_average?.toFixed(1)}`,
      color: '#40bcf4',
      icon: <StarsIcon style={{ height: '3rem', width: '3rem' }} />,
    },
    {
      title: (movie: IMovieDiscover) => `Liked by ${movie?.vote_count} members`,
      color: 'orange',
      icon: <FavoriteIcon style={{ height: '3rem', width: '3rem' }} />,
    },
  ];

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
    <IconButton
      onClick={handleNext}
      data-testid="carousel-slide-next"
      sx={{
        color: theme.palette.primary.main,
      }}
    >
      <ArrowForwardIosIcon />
    </IconButton>
  );
  const BackButton = () => (
    <IconButton
      onClick={handlePrev}
      data-testid="carousel-slide-previous"
      sx={{
        color: theme.palette.primary.main,
      }}
    >
      <ArrowBackIosIcon />
    </IconButton>
  );

  const MovieGrid = () => (
    <Grid item xs={12} display="flex" alignItems="center">
      <BackButton />
      <Grid container spacing={2} p={1} justifyContent="space-between" alignItems="center">
        {visibleMovies.map((movie, i) => (
          <Grid item key={i} sx={{ width: '240px', height: '350px', marginBottom: '3rem' }}>
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
                {iconsData.map((data, index) => (
                  <Tooltip
                    key={index}
                    title={<span style={{ fontSize: '1.5rem' }}>{data.title(movie)}</span>}
                    placement="top"
                  >
                    <IconButton sx={{ color: data.color }}>{data.icon}</IconButton>
                  </Tooltip>
                ))}
              </Grid>
            </Box>
          </Grid>
        ))}
      </Grid>
      <ForwardButton />
    </Grid>
  );
  return (
    <Grid container marginBottom="4rem">
      <HeaderButtons />
      <Grid container justifyContent="space-between" alignItems="center">
        <MovieGrid />
      </Grid>
    </Grid>
  );
};
