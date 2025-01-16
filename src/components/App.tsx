import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';
import { Nav } from './nav/nav';
import { Footer } from './Footer/Footer';
import { ScrollToTop } from './ScrollToTop/ScrollToTop';

export const App = () => {
  return (
    <>
      <Container maxWidth="lg" data-testid="app">
        <ScrollToTop />
        <Nav />
        <Outlet />
      </Container>
      <Footer />
    </>
  );
};
