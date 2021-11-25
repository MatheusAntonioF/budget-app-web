import React from 'react';

import { Navigate } from 'react-router-dom';

import { useAuth } from '../hooks/auth';

const RedirectResource = ({
  children,
}: {
  children: JSX.Element;
}): JSX.Element => {
  const {
    loggedUser: { id: loggedUserId },
  } = useAuth();

  return loggedUserId ? <Navigate to="/dashboard" /> : children;
};

export default RedirectResource;
