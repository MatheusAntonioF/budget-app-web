import React from 'react';

import { yupResolver } from '@hookform/resolvers/yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FiMail, FiEyeOff } from 'react-icons/fi';
import * as yup from 'yup';

import piggyBankIllustration from '../../assets/piggy-bank.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { authenticateUser } from '../../services/modules/users';
import { Container, Content } from './styles';

interface IFormInputs {
  email: string;
  password: string;
}

const schemaSignInValidator = yup
  .object({
    email: yup.string().required('Campo obrigatório').email('E-mail inválido'),
    password: yup.string().required('Campo obrigatório'),
  })
  .required();

const Auth: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver: yupResolver(schemaSignInValidator),
  });

  const onSubmit: SubmitHandler<IFormInputs> = async ({
    email,
    password,
  }: IFormInputs) => {
    try {
      const { token } = await authenticateUser({ email, password });
    } catch (err) {
      console.log('err', err);
    }
  };

  return (
    <Container>
      <Content>
        <img src={piggyBankIllustration} alt="Main Icon" />

        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Email"
            icon={FiMail}
            {...register('email')}
            error={errors.email}
          />
          <Input
            label="Senha"
            icon={FiEyeOff}
            {...register('password')}
            error={errors.password}
          />
          <Button type="submit">Enviar</Button>
        </form>
      </Content>
    </Container>
  );
};

export default Auth;
