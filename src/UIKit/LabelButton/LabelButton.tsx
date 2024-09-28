import { Button } from '@mui/material';

export const LabelButton = ({ label }) => {
  return (
    <>
      <Button
        sx={{
          margin: '5px',
          textTransform: 'none',
          color: '#9ab',
          bgcolor: '#283038',
          '&:hover': { bgcolor: '#283038' },
          '&:active': { bgcolor: '#283038' },
        }}
      >
        {label}
      </Button>
    </>
  );
};
