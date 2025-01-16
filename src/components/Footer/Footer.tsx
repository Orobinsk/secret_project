import { Box, Container, MenuItem } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { itemFooter } from './footerItem';
import { theme } from '../../providers/theme/theme';
import TmdbLogo from '../../assets/footer/tmdbLogo.svg';

const menuContainer = {
  display: 'flex',
  flex: 1,
  marginTop: '10px',
};

const menuItem = {
  color: theme.palette.primary.main,
  borderRadius: '20px',
  fontSize: '15px',
  padding: '10px',
  '&:hover': {
    color: theme.palette.primary.light,
  },
};

const boxStyle = {
  bgcolor: '#2D3440',
  minHeight: '200px',
  p: 1,
  mt: 3,
};

const containerStyle = {
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    flexDirection: 'column',
  },
};

export const Footer = () => {
  return (
    <Box sx={boxStyle}>
      <Container maxWidth="lg" sx={containerStyle}>
        <Box sx={menuContainer}>
          {itemFooter.map((item, index) => (
            <RouterLink to={item.link} key={index} style={{ textDecoration: 'none' }}>
              <MenuItem sx={menuItem}>{item.title}</MenuItem>
            </RouterLink>
          ))}
        </Box>
        <Box mt="10px">
          <RouterLink target="_blank" to="https://www.themoviedb.org/">
            <TmdbLogo width="100%" height="50px" />
          </RouterLink>
        </Box>
      </Container>
    </Box>
  );
};
