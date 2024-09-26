import { Avatar, Box, CardMedia, IconButton, Rating, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CommentIcon from '@mui/icons-material/Comment';
import { useEffect, useState } from 'react';
import { IMovie, ISearchResult } from '../../api/apiTypes';
import { getMovie } from '../../api/api';
import { API_PARAM, ENDPOINTS } from '../../constants';

export const MovieCard = () => {
  const [movieList, setMovieList] = useState<ISearchResult<IMovie[]>>();

  useEffect(() => {
    getMovie({ endpoint: ENDPOINTS.POPULAR, params: { [API_PARAM.PAGE]: 2 } }).then((data) =>
      setMovieList(data),
    );
  }, []);

  return (
    <>
      {movieList?.results.map((movie: IMovie) => (
        <Card
          key={movie.id}
          variant="outlined"
          sx={{
            bgcolor: '#12161a',
            display: 'flex',
            borderBottom: '1px solid #89a',
            borderRadius: 0,
          }}
        >
          <CardMedia
            component="img"
            height="150px"
            sx={{ width: 80, height: '150px', borderRadius: 1, margin: '10px', objectFit: 'cover' }}
            image={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} // Предполагается, что есть свойство posterUrl
            alt={`${movie.title} Poster`}
          />
          <Box display="flex" flexDirection="column" flexGrow="1" sx={{ p: 1 }}>
            <Box display="flex" alignItems="center">
              <Typography color="#ffffff" fontWeight="bold" sx={{ fontSize: 29 }} gutterBottom>
                {movie.title}
              </Typography>
              <Typography color="#89a" sx={{ fontSize: 18, ml: 1 }} gutterBottom>
                {movie.release_date}
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <Rating size="small" sx={{ color: 'green' }} value={movie.popularity} readOnly />
              <Typography sx={{ fontSize: 14, color: '#ffffff', mr: 1 }}>
                {movie.popularity}
              </Typography>
              <IconButton sx={{ color: 'orange' }} disableRipple>
                <FavoriteIcon />
              </IconButton>
              <IconButton sx={{ color: '#ffffff' }} disableRipple>
                <CommentIcon />
              </IconButton>
            </Box>
            <Typography sx={{ fontSize: 14, color: '#89a' }}>{movie.overview}</Typography>
          </Box>
        </Card>
      ))}
    </>
  );
};
