import React from 'react';

import Routes from './routes';
import GlobalStyles from './styles';

const App = (): JSX.Element => {
  return (
    <GlobalStyles>
      <Routes />
    </GlobalStyles>
  );
};

export default App;
