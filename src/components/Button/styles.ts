import styled, { css } from 'styled-components';

import { lightTheme } from '../../styles/themes/light';

interface IButtonProps {
  color: keyof typeof lightTheme.colors;
  width: string;
}

export const Button = styled.button<IButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({ theme: { colors }, color, width }) => css`
    background: ${colors[color].main};

    width: ${width};

    color: ${colors.white.main};
  `}

  height: 30px;

  border-radius: 4px;

  cursor: pointer;

  transition: all 250ms ease-in;

  &:hover {
    transform: scale(1.06);
  }
`;
