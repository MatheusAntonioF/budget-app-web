import React from 'react';

import { Navigate } from 'react-router-dom';

import Navbar from '../components/Navbar';
import { useAuth } from '../hooks/auth';

interface IPrivateResourceProps {
  children: JSX.Element;
}

const PrivateResource = ({ children }: IPrivateResourceProps): JSX.Element => {
  const {
    loggedUser: { id: loggedUserId },
  } = useAuth();

  return loggedUserId ? (
    <Navbar>{children}</Navbar>
  ) : (
    <Navigate to="/" replace />
  );
};

export default PrivateResource;
