import { BrowserRouter } from 'react-router-dom';
import { Router } from '../providers/router/Router';
import { Suspense } from 'react';

export const Root = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </Suspense>
  );
};
