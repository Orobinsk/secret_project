import { Box, Button, IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useEffect, useState } from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import GridViewIcon from '@mui/icons-material/GridView';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { getMovie } from '../../api/api';
import { API_PARAM, ENDPOINTS } from '../../constants';
import { IMovie, ISearchResult } from '../../api/apiTypes';
import { Link } from 'react-router-dom';
import { PosterCard } from '../../components/posterCard/PosterCard';

export const Carousel = () => {
  const [movieList, setMovieList] = useState<ISearchResult<IMovie[]>>();

  useEffect(() => {
    getMovie({ endpoint: ENDPOINTS.POPULAR, params: { [API_PARAM.PAGE]: 2 } }).then((data) =>
      setMovieList(data),
    );
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;
  const totalItems = movieList?.results.length;

  const handleNext = () => {
    if (currentIndex < movieList.results.length)
      setCurrentIndex((prevIndex) => (prevIndex + 4 + totalItems) % totalItems);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 4 + totalItems) % totalItems);
  };

  const visibleMovies = movieList?.results
    ? [...movieList.results, ...movieList.results].slice(currentIndex, currentIndex + itemsPerPage)
    : [];

  return (
    <Box sx={{ bgcolor: '#12161a' }} paddingBottom="40px">
      <Box display="flex" justifyContent="space-between" sx={{ borderBottom: '1px solid #89a' }}>
        <Button
          sx={{
            color: '#89a',
            ':hover': {
              color: '#FFFF',
            },
          }}
          disableRipple
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
          disableRipple
        >
          MORE
        </Button>
      </Box>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <IconButton
          onClick={handlePrev}
          sx={{
            color: '#89a',
          }}
          disableRipple
        >
          <ArrowBackIosIcon />
        </IconButton>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '10px',
            width: '100%',
            position: 'relative',
          }}
        >
          {visibleMovies.map((m, i) => (
            <Box
              key={i}
              sx={{
                border: '2px solid black',
                borderRadius: '10px',
                '&:hover': { border: '2px solid #00e054' },
                width: '236px',
                height: '351px',
              }}
              margin="10px 5px"
            >
              <Link to={`/film/${m.id}`}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${m.poster_path}`}
                  alt=""
                  style={{ width: '100%', height: '100%', borderRadius: '10px' }}
                />
              </Link>
              <Box display="flex" justifyContent="center" padding="5px">
                <IconButton sx={{ color: 'green' }}>
                  <RemoveRedEyeIcon />
                </IconButton>
                <IconButton sx={{ color: '#40bcf4' }}>
                  <GridViewIcon />
                </IconButton>
                <IconButton sx={{ color: 'orange' }} disableRipple>
                  <FavoriteIcon />
                </IconButton>
              </Box>
            </Box>
          ))}
        </Box>
        <IconButton
          onClick={handleNext}
          sx={{
            color: '#89a',
          }}
          disableRipple
        >
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Box>
  );
};
