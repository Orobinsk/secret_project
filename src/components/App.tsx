import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import { Nav } from './nav/nav';

export const App = () => {
  return (
    <Container maxWidth="lg" sx={{ bgcolor: '#12161a', height: '100%' }}>
      <Nav />
      <Outlet />
    </Container>
  );
};
