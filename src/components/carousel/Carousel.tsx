import { Box, Button, Grid, IconButton, Tooltip } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useEffect, useState } from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import GridViewIcon from '@mui/icons-material/GridView';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { getMovieList } from '../../api/api';
import { IResponseList, MovieDetails } from '../../api/apiTypes';
import { Link as RouterLink } from 'react-router-dom';
import { useTheme } from '@mui/material/styles';
export const Carousel = () => {
  const [movieList, setMovieList] = useState<IResponseList<MovieDetails[]>>();
  const theme = useTheme();

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
  const headerBtnStyles = {
    color: theme.palette.text.secondary,
    ':hover': {
      color: theme.palette.text.primary,
    },
  };
  const HeaderButtons = () => (
    <Grid container justifyContent="space-between" borderBottom="1px solid #89a">
      <Grid item>
        <Button sx={headerBtnStyles}>POPULAR FILMS THIS WEEK</Button>
      </Grid>
      <Grid item>
        <Button sx={headerBtnStyles}>MORE</Button>
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
  const movieGridStyles = {
    border: '2px solid black',
    borderRadius: '10px',
    width: '100%',
    height: '100%',
    '&:hover': { border: '2px solid #00e054' },
  };
  const MovieGrid = () => (
    <Grid item xs={10}>
      <Grid container spacing={2} justifyContent="center">
        {visibleMovies.map((movie, i) => (
          <Grid item key={i} sx={{ width: '236px', height: '351px' }}>
            <Box sx={movieGridStyles}>
              <RouterLink to={`/film/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt=""
                  key={movie.id}
                  data-testid={`movie-poster-${movie.id}`}
                  style={{ width: '100%', height: '100%', borderRadius: '10px' }}
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
                  title={`Appears in genres: ${movie?.genres?.map((g) => g.name).join(', ')}`}
                  placement="top"
                >
                  <IconButton sx={{ color: '#40bcf4' }}>
                    <GridViewIcon />
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
