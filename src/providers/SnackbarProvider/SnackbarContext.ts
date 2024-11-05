import { createContext } from 'react';

export interface ErrorContextType {
  open: boolean;
  errorMessage: string;
  showError: (message: string) => void;
  closeError: () => void;
}

export const SnackbarContext = createContext<ErrorContextType | undefined>(undefined);
