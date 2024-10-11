import { Box, InputAdornment, MenuItem, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { IItemMenu, itemMenu } from './menuItem';
import Logo from '../../assets/nav/logo.png';
import { Link as RouterLink, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getCollection } from '../../api/api';
import { API_PARAM, ENDPOINTS } from '../../constants';
import { IMovie, IMovieSearchResult } from '../../api/apiTypes';

export const Nav = () => {
  const { id } = useParams<{ id: string }>();
  const [inputValue, setInputValue] = useState('');
  const [searchMovie, setSearchMovie] = useState<IMovieSearchResult<IMovie[]>>();
  const [filteredMovies, setFilteredMovies] = useState<IMovieSearchResult<IMovie[]>>([]);

  useEffect(() => {
    getCollection({
      endpoint: ENDPOINTS.COLLECTION,
      params: { [API_PARAM.QUERY]: inputValue },
    }).then((data) => {
      console.log('Fetched movies data:', data);
      setSearchMovie(data);
    });
    console.log(2);
  }, [inputValue]);
  console.log(inputValue);

  useEffect(() => {
    if (searchMovie?.results) {
      const filtered = searchMovie.results.filter((movie) =>
        movie.name.toLowerCase().includes(inputValue.toLowerCase()),
      );
      setFilteredMovies(filtered);
    }
  }, [inputValue, searchMovie]);

  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" padding="10px">
      <RouterLink to="/">
        <img src={Logo} style={{ width: '158px', height: '55px' }} alt="logo" />
      </RouterLink>
      <Box display="flex">
        {itemMenu.map((item: IItemMenu, index: number) => (
          <RouterLink to={item.link} key={index} style={{ textDecoration: 'none' }}>
            <MenuItem
              sx={{
                color: 'grey',
                borderRadius: '20px',
                fontSize: '14px',
                '&:hover': {
                  color: 'white',
                },
                '& .MuiTouchRipple-root': {
                  display: 'none',
                },
              }}
            >
              {item.title}
            </MenuItem>
          </RouterLink>
        ))}
        <TextField
          variant="outlined"
          placeholder="Поиск..."
          onChange={(e) => setInputValue(e.target.value)}
          sx={{
            '& .MuiInputBase-root': {
              height: 40,
              borderRadius: '20px',
              bgcolor: 'white',
              fontSize: '14px',
            },
          }}
          InputProps={{
            startAdornment: <SearchIcon sx={{ color: 'grey' }} />,
          }}
        />
        <Box position="absolute" bgcolor="white">
          {filteredMovies.length > 0
            ? filteredMovies.map((film) => (
                <Typography key={film.id} sx={{ color: 'black', marginBottom: '5px' }}>
                  {film.name}
                </Typography>
              ))
            : inputValue.length > 0 && (
                <Typography sx={{ color: 'black' }}>Фильмы не найдены</Typography>
              )}
        </Box>
      </Box>
    </Box>
  );
};
