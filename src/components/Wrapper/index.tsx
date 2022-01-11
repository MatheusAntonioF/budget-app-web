import React from 'react';

import { Wrapper as WrapperStyled, Container } from './styles';

const Wrapper: React.FC = ({ children }) => {
  return (
    <WrapperStyled>
      <Container>{children}</Container>
    </WrapperStyled>
  );
};

export default Wrapper;
