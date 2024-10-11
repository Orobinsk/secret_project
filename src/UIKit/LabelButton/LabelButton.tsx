import { Button } from '@mui/material';
import { FC } from 'react';

interface LabelButtonProps {
  label: string;
}

export const LabelButton: FC<LabelButtonProps> = ({ label }) => {
  return (
    <Button
      sx={{
        margin: '2px',
        padding: '5px',
        textTransform: 'none',
        color: '#9ab',
        bgcolor: '#283038',
        '&:hover': { bgcolor: '#283038' },
        '&:active': { bgcolor: '#283038' },
      }}
    >
      {label}
    </Button>
  );
};
