import { Button, useTheme } from '@mui/material';
import { FC } from 'react';

interface LabelButtonProps {
  label: string;
  searchProp?: boolean;
  changeLabel?: () => void;
}

export const LabelButton: FC<LabelButtonProps> = ({ changeLabel, label, searchProp }) => {
  const theme = useTheme();

  const buttonStyles = {
    width: searchProp ? '100%' : 'auto',
    margin: '2px',
    padding: '5px',
    textTransform: 'none',
    color: theme.palette.text.secondary,
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
