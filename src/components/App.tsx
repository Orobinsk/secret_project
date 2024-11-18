import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import { Nav } from './nav/nav';

export const App = () => {
  return (
    <Container maxWidth="lg" data-testid="app">
      <Nav />
      <Outlet />
    </Container>
  );
};
