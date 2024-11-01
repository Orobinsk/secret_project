import { Box, Drawer, IconButton, InputAdornment, MenuItem, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { itemMenu } from './menuItem';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { theme } from '../../providers/theme/theme';
import { createNavStyles } from './createNavStyles';
import MenuIcon from '@mui/icons-material/Menu';
import Logo from '../../assets/nav/logo.svg';

export const Nav = () => {
  const [query, setQuery] = useState<string>('');
  const navigate = useNavigate();
  const styles = createNavStyles(theme);
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  function handleOpen(newOpen: boolean) {
    setOpenMenu(newOpen);
  }
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleSearch = () => {
    if (query.trim() !== '') {
      navigate(`/search?query=${encodeURIComponent(query)}`);
    }
  };

  const enterClick = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && query.trim() !== '') {
      handleSearch();
    }
  };

  return (
    <Box sx={styles.container}>
      <Box display="flex" alignItems="center">
        <IconButton onClick={() => handleOpen(true)} sx={styles.iconButtonStyles}>
          <MenuIcon sx={styles.openMenuBtn} />
        </IconButton>
        <Drawer anchor="left" open={openMenu} onClose={() => handleOpen(false)}>
          <Box>
            {itemMenu.map((item, index) => (
              <RouterLink to={item.link} key={index} style={{ textDecoration: 'none' }}>
                <MenuItem sx={styles.drawerItem}>{item.title}</MenuItem>
              </RouterLink>
            ))}
          </Box>
        </Drawer>
        <RouterLink to="/">
          <Logo width="100%" height={25} />
        </RouterLink>
      </Box>
      <Box sx={styles.menuContainer}>
        {itemMenu.map((item, index) => (
          <RouterLink to={item.link} key={index} style={{ textDecoration: 'none' }}>
            <MenuItem sx={styles.menuItem}>{item.title}</MenuItem>
          </RouterLink>
        ))}
      </Box>
      <TextField
        onChange={handleChange}
        onKeyDown={enterClick}
        variant="outlined"
        placeholder="Поиск..."
        autoComplete="off"
        value={query}
        sx={styles.searchField}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon sx={styles.searchIcon} onClick={handleSearch} />
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};
