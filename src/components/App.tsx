import { Link, Outlet } from 'react-router-dom';
import { Container } from '@mui/material';

export const App = () => {
  return (
    <Container maxWidth="lg">
      <Link to={'/'}>main</Link>
      <Link to={'/about'}>about</Link>
      <Link to={'/film/1'}>film 1</Link>
      <Outlet />
    </Container>
  );
};
