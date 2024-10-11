import { BrowserRouter } from 'react-router-dom';
import { Router } from '../providers/router/Router';
import { Suspense } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../providers/theme/theme';

export const Root = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ThemeProvider>
    </Suspense>
  );
};
