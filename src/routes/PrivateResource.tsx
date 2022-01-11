import React from 'react';

import { Navigate } from 'react-router-dom';

import Navbar from '../components/Navbar';
import Wrapper from '../components/Wrapper';
import { useAuth } from '../hooks/auth';

interface IPrivateResourceProps {
  children: JSX.Element;
}

const PrivateResource = ({ children }: IPrivateResourceProps): JSX.Element => {
  const {
    loggedUser: { id: loggedUserId },
  } = useAuth();

  return loggedUserId ? (
    <>
      <Navbar />
      <Wrapper>{children}</Wrapper>
    </>
  ) : (
    <Navigate to="/" replace />
  );
};

export default PrivateResource;
