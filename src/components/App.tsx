import { Link as RouterLink, Outlet } from 'react-router-dom';
import { Container, Link } from '@mui/material';
import { Nav } from './nav/nav';
import { getMovie } from '../api/api';
import { useState, useEffect } from 'react';
import { Section } from './section/Section';
import { Carousel } from './carousel/Carousel';
import { IMovie, ISearchResult } from '../api/apiTypes';
import { API_PARAM, ENDPOINTS } from '../constants';

export const App = () => {
  const [movieList, setMovieList] = useState<ISearchResult<IMovie[]>>();

  useEffect(() => {
    getMovie({ endpoint: ENDPOINTS.POPULAR, params: { [API_PARAM.PAGE]: 2 } }).then((data) =>
      setMovieList(data),
    );
  }, []);

  //пример использования возвращаемых данных
  console.log(movieList?.results[0]);
  return (
    <Container maxWidth="lg" sx={{ bgcolor: '#12161a', height: '100%' }}>
      <Nav />
      {/* <Link component={RouterLink} to={'/'}>
        main
      </Link>
      <Link component={RouterLink} to={'/about'}>
        about
      </Link>
      <Link component={RouterLink} to={'/film/1'}>
        film 1
      </Link> */}
      <Outlet />
    </Container>
  );
};
