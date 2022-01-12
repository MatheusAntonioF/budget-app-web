import React, { useCallback } from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import {
  AiOutlineFontSize,
  AiOutlineBulb,
  AiOutlineDollarCircle,
  AiOutlineCalendar,
  AiOutlineSelect,
} from 'react-icons/ai';
import * as yup from 'yup';

import Button from '../../../components/Button';
import Input from '../../../components/Input';
import CurrencyInput from '../../../components/Input/CurrencyInput';
import Datepicker from '../../../components/Input/Datepicker';
import Select from '../../../components/Input/Select';
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
  category_id: string;
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
        <Input
          label="Nome"
          {...register('name')}
          icon={AiOutlineFontSize}
          error={errors.name}
          placeholder="Nome do lançamento"
        />
        <Input
          label="Descrição"
          {...register('description')}
          icon={AiOutlineBulb}
          error={errors.description}
          placeholder="Descrição do lançamento"
        />
        <div className="input-group">
          <div>
            <CurrencyInput
              label="Valor"
              name="value"
              control={control}
              placeholder="R$ 1.000"
              icon={AiOutlineDollarCircle}
            />
          </div>
          <div>
            <Datepicker
              label="Data"
              name="date"
              control={control}
              icon={AiOutlineCalendar}
              placeholder="00/00/0000"
            />
          </div>
        </div>
        <Select
          label="Categoria"
          name="category_id"
          placeholder="Selecione uma categoria..."
          options={[{ label: 'teste', value: 'teste' }]}
          control={control}
          icon={AiOutlineSelect}
        />

        <Button>Salvar</Button>
      </Form>
    </Modal>
  );
};

export default CreateNewSpending;
