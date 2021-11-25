import { api } from '../../api';
import { IUserCredentials, IUserAuthenticateResponse, IUser } from './dtos';

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

export async function getLoggedUserProfile(): Promise<IUser> {
  const { data } = await api.get('/auth/profile');

  return data;
}
