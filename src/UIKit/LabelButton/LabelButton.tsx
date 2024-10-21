import { Button } from '@mui/material';
import { FC } from 'react';

interface LabelButtonProps {
  label: string;
  searchProp?: boolean;
  onClick?: () => void;
}

export const LabelButton: FC<LabelButtonProps> = ({ onClick, label, searchProp }) => {
  const buttonStyles = {
    width: searchProp ? '100%' : 'auto',
    margin: '2px',
    padding: '5px',
    textTransform: 'none',
    color: '#9ab',
    bgcolor: '#283038',
    '&:hover': {
      bgcolor: '#283038',
      color: '#41BCF4',
    },
    '&:active': {
      bgcolor: '#283038',
    },
  };

  return (
    <Button onClick={onClick} sx={buttonStyles}>
      {label}
    </Button>
  );
};
