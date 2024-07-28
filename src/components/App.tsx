import { Link as RouterLink, Outlet } from 'react-router-dom';
import { Container, Link } from '@mui/material';
import { Nav } from './nav/nav';

export const App = () => {
  return (
    <Container maxWidth="lg">
      <Nav />
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
