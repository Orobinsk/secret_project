import { BrowserRouter } from 'react-router-dom';
import { Router } from '../providers/router/Router';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../providers/theme/theme';
import { ImageConfigProvider } from '../providers/ImageConfigProvider/ImageConfigProvider';
import { ErrorBoundary } from '../providers/ErrorBoundary/ErrorBoundary';

export const Root = () => {
  return (
    <ErrorBoundary>
      <ImageConfigProvider>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </ThemeProvider>
      </ImageConfigProvider>
    </ErrorBoundary>
  );
};
