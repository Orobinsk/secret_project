import { Box, Button, IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState } from 'react';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import GridViewIcon from '@mui/icons-material/GridView';
import FavoriteIcon from '@mui/icons-material/Favorite';

const movies = [
  {
    title: 'Inception',
    image:
      'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg',
  },
  {
    title: 'The Matrix',
    image: 'https://m.media-amazon.com/images/I/51EG732BV3L._AC_.jpg',
  },
  {
    title: 'Interstellar',
    image:
      'https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg',
  },
  {
    title: 'The Dark Knight',
    image:
      'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg',
  },
  {
    title: 'Pulp Fiction',
    image:
      'https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg',
  },
  {
    title: 'Barbie',
    image:
      'https://m.media-amazon.com/images/M/MV5BNjU3N2QxNzYtMjk1NC00MTc4LTk1NTQtMmUxNTljM2I0NDA5XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg',
  },
];

export const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 4;
  const totalItems = movies.length;

  const handleNext = () => {
    if (currentIndex < visibleMovies.length)
      setCurrentIndex((prevIndex) => (prevIndex + 4) % totalItems);
  };

  const handlePrev = () => {
    if (currentIndex - 1 >= 0) {
      setCurrentIndex((prevIndex) => (prevIndex - 4 + totalItems) % totalItems);
    }
  };

  const visibleMovies = [...movies, ...movies].slice(currentIndex, currentIndex + itemsPerPage);

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
              <img
                src={m.image}
                alt=""
                style={{ width: '100%', height: '100%', borderRadius: '10px' }}
              />
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
