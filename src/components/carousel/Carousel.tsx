import { Box, Button, IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useEffect, useState } from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import GridViewIcon from '@mui/icons-material/GridView';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { getMovieList } from '../../api/api';
import { IMovie, IResponseList } from '../../api/apiTypes';
import { Link as RouterLink } from 'react-router-dom';

export const Carousel = () => {
  const [movieList, setMovieList] = useState<IResponseList<IMovie[]>>();

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

  return (
    <Box paddingBottom="40px">
      <Box display="flex" justifyContent="space-between" borderBottom="1px solid #89a">
        <Button
          sx={{
            color: '#89a',
            ':hover': {
              color: '#FFFF',
            },
          }}
        >
          POPULAR FILMS THIS WEEK
        </Button>
        <Button
          sx={{
            color: '#89a',
            ':hover': {
              color: '#FFFF',
            },
          }}
        >
          MORE
        </Button>
      </Box>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <IconButton
          onClick={handlePrev}
          data-testid="carousel-slide-previous"
          sx={{
            color: '#89a',
          }}
        >
          <ArrowBackIosIcon />
        </IconButton>
        <Box display="grid" gridTemplateColumns="repeat(4, 1fr)" width="100%" position="relative">
          {visibleMovies.map((movie, i) => (
            <Box
              key={i}
              border="2px solid black"
              borderRadius="10px"
              width="236px"
              height="351px"
              margin="10px 5px"
              sx={{
                '&:hover': { border: '2px solid #00e054' },
              }}
            >
              <RouterLink to={`/film/${movie.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                  alt=""
                  key={movie.id}
                  data-testid={`movie-poster-${movie.id}`}
                  style={{ width: '100%', height: '100%', borderRadius: '10px' }}
                />
              </RouterLink>
              <Box display="flex" justifyContent="center" padding="5px">
                <IconButton sx={{ color: 'green' }}>
                  <RemoveRedEyeIcon />
                </IconButton>
                <IconButton sx={{ color: '#40bcf4' }}>
                  <GridViewIcon />
                </IconButton>
                <IconButton sx={{ color: 'orange' }}>
                  <FavoriteIcon />
                </IconButton>
              </Box>
            </Box>
          ))}
        </Box>
        <IconButton
          onClick={handleNext}
          data-testid="carousel-slide-next"
          sx={{
            color: '#89a',
          }}
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
