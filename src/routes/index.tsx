import React from 'react';

import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import { Auth, Dashboard } from '../pages';
import PrivateResource from './PrivateResource';
import RedirectResource from './RedirectResource';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          path="/"
          element={
            <RedirectResource>
              <Auth />
            </RedirectResource>
          }
        />
        <Route
          path="/dashboard"
          element={
            <PrivateResource>
              <Dashboard />
            </PrivateResource>
          }
        />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
