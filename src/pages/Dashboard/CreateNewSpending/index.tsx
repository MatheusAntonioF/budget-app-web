import React, { useCallback } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import Button from '../../../components/Button';
import Input from '../../../components/Input';
import CurrencyInput from '../../../components/Input/CurrencyInput';
import Modal from '../../../components/Modal';
import { Form } from './styles';

interface ICreateNewSpendingProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IFormInputs {
  name: string;
  description: string;
  value: number;
  date: Date;
  category_id: number;
}

const schemaCreateSpendingValidator = yup
  .object({
    name: yup.string().required('Campo obrigatório'),
    description: yup.string().required('Campo obrigatório'),
    value: yup.string().required('Campo obrigatório'),
    date: yup.date().required('Campo obrigatório'),
    category_id: yup.string().required('Campo obrigatório'),
  })
  .required();

const CreateNewSpending: React.FC<ICreateNewSpendingProps> = ({
  setShowModal,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<IFormInputs>({
    resolver: yupResolver(schemaCreateSpendingValidator),
  });

  const onSubmit = useCallback((data: IFormInputs) => console.log(data), []);

  return (
    <Modal
      setShowModal={useCallback(() => setShowModal(false), [setShowModal])}
      maxWidth="500px"
      title="Novo lançamento"
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input label="Nome" {...register('name')} error={errors.name} />
        <Input
          label="Descrição"
          {...register('description')}
          error={errors.description}
        />
        <CurrencyInput
          label="Valor"
          name="value"
          control={control}
          placeholder="R$ 1.000"
        />
        <Input label="Data" {...register('date')} error={errors.date} />
        <Input
          label="Categoria"
          {...register('category_id')}
          error={errors.category_id}
        />

        <Button>Salvar</Button>
      </Form>
    </Modal>
  );
};

export default CreateNewSpending;
