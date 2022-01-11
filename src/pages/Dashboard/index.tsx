import React from 'react';

import { AiOutlinePlus } from 'react-icons/ai';

import { Container, ButtonCreateNewSpending } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <Container>
        <h1>Dashboard</h1>
      </Container>
      <ButtonCreateNewSpending>
        <AiOutlinePlus />
      </ButtonCreateNewSpending>
    </>
  );
};

export default Dashboard;
