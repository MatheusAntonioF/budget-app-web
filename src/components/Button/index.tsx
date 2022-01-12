import React from 'react';

import { lightTheme } from '../../styles/themes/light';
import { Button as ButtonStyled } from './styles';

export interface IButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: keyof typeof lightTheme.colors;
  width?: string;
}

const Button: React.FC<IButtonProps> = ({
  children,
  color = 'primary',
  width = '100%',
  ...rest
}) => {
  return (
    <ButtonStyled width={width} color={color} {...rest}>
      {children}
    </ButtonStyled>
  );
};

export default Button;
