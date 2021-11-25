import React, { createContext, useCallback, useContext, useMemo } from 'react';

import { api } from '../services/api';
import {
  authenticateUser,
  getLoggedUserProfile,
} from '../services/modules/users';
import { IUserCredentials } from '../services/modules/users/dtos';
import { useStorageState } from './storageState';
import { useToast } from './toast';

interface IAuthContextData {
  signIn: (authData: IUserCredentials) => Promise<void>;
  loggedUser: ILoggedUser;
  signOut: () => void;
}

interface ILoggedUser {
  id: string;
  name: string;
  token: string;
}

const LABEL_AUTH_STORAGE = '@BUDGET_APP_AUTH';

const AuthContext = createContext({} as IAuthContextData);

export const AuthProvider: React.FC = ({ children }) => {
  const [loggedUser, setLoggedUser, removeStorage] =
    useStorageState<ILoggedUser>({
      initialValue: {} as ILoggedUser,
      labelStorage: LABEL_AUTH_STORAGE,
    });

  const { addToast } = useToast();

  const signIn = useCallback(
    async ({ email, password }: IUserCredentials) => {
      try {
        const { token } = await authenticateUser({ email, password });

        api.defaults.headers.common.Authorization = `Bearer ${token}`;

        const { id, name } = await getLoggedUserProfile();

        setLoggedUser({ id, name, token });
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Erro na autenticação',
          description: 'Ocorreu um erro ao fazer login, cheque as credenciais',
        });
      }
    },
    [addToast, setLoggedUser],
  );

  const signOut = useCallback(
    () => removeStorage(LABEL_AUTH_STORAGE),
    [removeStorage],
  );

  const authValues = useMemo(
    () => ({ signIn, loggedUser, signOut }),
    [signIn, loggedUser, signOut],
  );

  return (
    <AuthContext.Provider value={authValues}>{children}</AuthContext.Provider>
  );
};

export function useAuth(): IAuthContextData {
  const context = useContext(AuthContext);

  if (!context) throw new Error('useAuth must be used within AuthProvider');

  return context;
}
