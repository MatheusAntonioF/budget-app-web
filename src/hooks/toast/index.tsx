import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

import Toast from '../../components/Toast';

export interface IToastMessage {
  type: 'success' | 'error';
  title: string;
  description: string;
}

interface IToastContextData {
  addToast(message: IToastMessage): void;
}

const ToastContext = createContext({} as IToastContextData);

export const ToastProvider: React.FC = ({ children }) => {
  const [toast, setToast] = useState({} as IToastMessage);

  const addToast = useCallback(
    ({ type, title, description }: IToastMessage) => {
      if (toast.type) return setToast({} as IToastMessage);

      return setToast({ type, title, description });
    },
    [toast],
  );

  const removeToast = useCallback(() => setToast({} as IToastMessage), []);

  const toastValues = useMemo(() => ({ addToast }), [addToast]);

  return (
    <ToastContext.Provider value={toastValues}>
      {!!toast.type && <Toast toast={toast} removeToast={removeToast} />}
      {children}
    </ToastContext.Provider>
  );
};

export function useToast(): IToastContextData {
  const context = useContext(ToastContext);

  if (!context) throw new Error('useToast must be used within a ToastProvider');

  return context;
}
