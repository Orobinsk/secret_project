import { Box, Button, Typography } from '@mui/material';

export const PageError = () => {
  const handleReload = () => {
    window.location.reload();
  };
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      gap={2}
    >
      <Typography variant="h4" color="#41BCF4">
        An unexpected error occurred
      </Typography>
      <Typography variant="h6" color="#41BCF4">
        Please note that the TMDB API is not available in the Russian Federation
      </Typography>
      <Button onClick={handleReload} sx={{ color: '#ee7000' }}>
        Reload page
      </Button>
    </Box>
  );
};
