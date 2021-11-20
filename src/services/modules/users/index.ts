import { api } from '../../api';
import { IUserCredentials, IUserAuthenticateResponse } from './dtos';

export async function authenticateUser({
  email,
  password,
}: IUserCredentials): Promise<IUserAuthenticateResponse> {
  const { data } = await api.post<IUserAuthenticateResponse>('/auth/login', {
    email,
    password,
  });

  return data;
}
