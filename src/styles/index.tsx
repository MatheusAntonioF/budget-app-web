import React from 'react';

import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './GlobalStyles';
import { lightTheme } from './themes/light';

const DefaultStyles: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
};

export default DefaultStyles;
