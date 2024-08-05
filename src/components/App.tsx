import { Link as RouterLink, Outlet } from 'react-router-dom';
import { Container, Link } from '@mui/material';
import { Nav } from './nav/nav';
import { ITmdbServerResponse, getMoviesList } from '../api/api';
import { useState, useEffect } from 'react';

import { MovieCard } from './movieCard/MovieCard';
import { Section } from './section/Section';

export const App = () => {
  // временное решение для разработки основного контента
  const [movieList, setMovieList] = useState<ITmdbServerResponse>();
  useEffect(() => {
    getMoviesList().then((data) => setMovieList(data));
  }, []);

  return (
    <Container maxWidth="lg">
      <Nav />
      <Section />
      <Link component={RouterLink} to={'/'}>
        main
      </Link>
      <Link component={RouterLink} to={'/about'}>
        about
      </Link>
      <Link component={RouterLink} to={'/film/1'}>
        film 1
      </Link>
      <Outlet />
    </Container>
  );
};
