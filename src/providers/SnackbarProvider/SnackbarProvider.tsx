import { FC, ReactNode, useState, useEffect } from 'react';
import { SnackbarContext } from './SnackbarContext';
import { Alert, Snackbar } from '@mui/material';
import { setupAxiosInterceptors } from '../../api/base';

export const SnackbarProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const showError = (message: string) => {
    setErrorMessage(message);
    setOpen(true);
  };

  const closeError = () => {
    setOpen(false);
  };

  useEffect(() => {
    setupAxiosInterceptors(showError);
  }, []);

  return (
    <SnackbarContext.Provider value={{ open, errorMessage, showError, closeError }}>
      {children}
      <Snackbar open={open} autoHideDuration={5000} onClose={closeError}>
        <Alert onClose={closeError} severity="error" sx={{ width: '100%' }}>
          {errorMessage}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
};
