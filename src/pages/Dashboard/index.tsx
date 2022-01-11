import React, { useState } from 'react';

import { AiOutlinePlus } from 'react-icons/ai';

import CreateNewSpending from './CreateNewSpending';
import { Container, ButtonCreateNewSpending } from './styles';

const Dashboard: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Container>
        <h1>Dashboard</h1>
      </Container>
      <ButtonCreateNewSpending onClick={() => setShowModal(true)}>
        <AiOutlinePlus />
      </ButtonCreateNewSpending>
      {showModal && <CreateNewSpending setShowModal={setShowModal} />}
    </>
  );
};

export default Dashboard;
