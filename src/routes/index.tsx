import React from 'react';

import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import { Auth } from '../pages';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" element={<Auth />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
