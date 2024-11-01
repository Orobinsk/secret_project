import { Box, Button, Menu, MenuItem } from '@mui/material';
import { FC, useState } from 'react';
import { theme } from '../../providers/theme/theme';

interface filterButtonProps {
  item: string[];
  onChange: (value: string) => void;
}
export const FilterButton: FC<filterButtonProps> = ({ item, onChange }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [value, setValue] = useState<string>(item[0]);

  const changeTitle = (newValue: string) => {
    setValue(newValue);
    onChange(newValue);
    handleClose();
  };

  return (
    <Box>
      <Button sx={{ fontSize: '15px' }} onClick={handleClick}>
        {value}
      </Button>
      <Menu
        sx={{ maxHeight: '400px' }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        {item.map((currentItem, i) => (
          <MenuItem
            sx={{ color: theme.palette.primary.main, fontSize: '15px' }}
            key={i}
            onClick={() => {
              handleClose();
              changeTitle(currentItem);
            }}
          >
            {currentItem}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};
