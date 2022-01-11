import React, { lazy, Suspense } from 'react';

import { BrowserRouter, Routes as Switch, Route } from 'react-router-dom';

import PrivateResource from './PrivateResource';
import RedirectResource from './RedirectResource';

const Auth = lazy(() => import('../pages/Auth'));
const Dashboard = lazy(() => import('../pages/Dashboard'));

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<div />}>
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
      </Suspense>
    </BrowserRouter>
  );
};

export default Routes;
