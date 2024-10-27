import { BrowserRouter } from 'react-router-dom';
import { Router } from '../providers/router/Router';
import { Suspense } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../providers/theme/theme';
import { ImageConfigProvider } from '../providers/ImageConfigProvider/ImageConfigProvider';

export const Root = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ImageConfigProvider>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </ThemeProvider>
      </ImageConfigProvider>
    </Suspense>
  );
};
