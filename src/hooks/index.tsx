import React from 'react';

import { AuthProvider } from './auth';
import { ToastProvider } from './toast';

const AppProviders: React.FC = ({ children }) => {
  return (
    <ToastProvider>
      <AuthProvider>{children}</AuthProvider>
    </ToastProvider>
  );
};

export default AppProviders;
