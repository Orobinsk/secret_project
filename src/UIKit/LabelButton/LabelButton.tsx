import { Button, useTheme } from '@mui/material';
import { FC } from 'react';

interface LabelButtonProps {
  label: string;
  searchProp?: boolean;
  changeLabel?: () => void;
  isActive?: boolean;
}

export const LabelButton: FC<LabelButtonProps> = ({ changeLabel, label, searchProp, isActive }) => {
  const theme = useTheme();

  const buttonStyles = {
    width: searchProp ? '100%' : 'auto',
    margin: '0.2rem',
    padding: '0.5rem',
    textTransform: 'none',
    fontSize: '1.5rem',
    color: isActive ? theme.palette.secondary.contrastText : theme.palette.text.secondary,
    bgcolor: '#283038',

    '&:hover': {
      bgcolor: '#283038',
      color: theme.palette.secondary.contrastText,
    },
    '&:active': {
      bgcolor: '#283038',
    },
  };

  return (
    <Button onClick={changeLabel} sx={buttonStyles}>
      {label}
    </Button>
  );
};
