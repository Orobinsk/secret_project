import { Box, InputAdornment, MenuItem, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { IItemMenu, itemMenu } from './menuItem';
import Logo from '../../assets/nav/logo.png';
import { Link as RouterLink } from 'react-router-dom';

export const Nav = () => {
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
          sx={{
            '& .MuiInputBase-root': {
              height: 40,
              borderRadius: '20px',
              bgcolor: 'white',
              fontSize: '14px',
            },
          }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: 'grey' }} />
              </InputAdornment>
            ),
          }}
        />
      </Box>
    </Box>
  );
};
