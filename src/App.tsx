import React, { FC, StrictMode } from 'react';

import { RouterProvider } from 'react-router-dom';

import { ErrorBoundary } from './components/ErrorBoundary';
import { router } from './utils/Router';

import './styles.scss';

export const App: FC = () => {
  return (
    <StrictMode>
      <ErrorBoundary>
        <RouterProvider router={router} />
      </ErrorBoundary>
    </StrictMode>
  );
};
