import React from 'react';

import { lightTheme } from '../../styles/themes/light';
import { Button } from './styles';

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: keyof typeof lightTheme.colors;
  width?: string;
}

const ButtonComponent: React.FC<IButtonProps> = ({
  children,
  color = 'primary',
  width = '100%',
  ...rest
}) => {
  return (
    <Button width={width} color={color} {...rest}>
      {children}
    </Button>
  );
};

export default ButtonComponent;
