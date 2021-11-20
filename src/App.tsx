import React from 'react';

import AppProviders from './hooks';
import Routes from './routes';
import GlobalStyles from './styles';

const App = (): JSX.Element => {
  return (
    <GlobalStyles>
      <AppProviders>
        <Routes />
      </AppProviders>
    </GlobalStyles>
  );
};

export default App;
