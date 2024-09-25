import { Button } from '@mui/material';

export const LabelButton = () => {
  return (
    <Button
      sx={{
        textTransform: 'none',
        color: '#9ab',
        bgcolor: '#283038',
        '&hover': { bgcolor: '#283038' },
        '&active': { bgcolor: '#283038' },
      }}
    >
      Winona Ryder
    </Button>
  );
};
