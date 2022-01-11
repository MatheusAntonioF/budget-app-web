import React, { useCallback } from 'react';

import Button from '../../../components/Button';
import Input from '../../../components/Input';
import Modal from '../../../components/Modal';
import { Form } from './styles';

interface ICreateNewSpendingProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateNewSpending: React.FC<ICreateNewSpendingProps> = ({
  setShowModal,
}) => {
  return (
    <Modal
      setShowModal={useCallback(() => setShowModal(false), [setShowModal])}
      maxWidth="500px"
      title="Novo lançamento"
    >
      <Form>
        <Input label="Nome" name="name" />
        <Input label="Descrição" name="description" />
        <Input label="Valor" name="value" />
        <Input label="Data" name="date" />
        <Input label="Categoria" name="category" />

        <Button>Salvar</Button>
      </Form>
    </Modal>
  );
};

export default CreateNewSpending;
