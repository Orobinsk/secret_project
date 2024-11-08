import { Box, Button, Menu, MenuItem } from '@mui/material';
import { FC, useState, MouseEvent } from 'react';
import { theme } from '../../../providers/theme/theme';

export type TOption = { label: string; value: string } | { id: number | null; name: string };

interface DropDownMenuProps {
  items: TOption[];
  activeItem: TOption;
  onChange: (value: TOption) => void;
}

const getActiveItemTitle = (option?: TOption): string => {
  if (option && 'label' in option) {
    return option.label;
  } else if (option && 'name' in option) {
    return option.name;
  }
  return '';
};

export const DropDownMenu: FC<DropDownMenuProps> = ({ items, onChange, activeItem }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeTitle = (newValue: TOption) => {
    onChange(newValue);
    handleClose();
  };

  return (
    <Box>
      <Button sx={{ fontSize: '15px', alignItems: 'center' }} onClick={handleClick}>
        {getActiveItemTitle(activeItem)}
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
        {items.map((currentItem, i) => (
          <MenuItem
            sx={{ color: theme.palette.primary.main, fontSize: '15px', alignItems: 'center' }}
            key={i}
            onClick={() => changeTitle(currentItem)}
          >
            {getActiveItemTitle(currentItem)}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};
