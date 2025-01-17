import { Outlet } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import { Nav } from './nav/nav';
import { Footer } from './Footer/Footer';
import { ScrollToTop } from './ScrollToTop/ScrollToTop';

export const App = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
      data-testid="app"
    >
      <Container maxWidth="lg" sx={{ flex: 1 }}>
        <ScrollToTop />
        <Nav />
        <Outlet />
      </Container>
      <Footer />
    </Box>
  );
};
