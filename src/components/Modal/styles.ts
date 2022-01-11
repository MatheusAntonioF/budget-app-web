import styled, { css, keyframes } from 'styled-components';

import { IModalProps } from '.';

const showModalAnimation = keyframes`
  from {
    transform: scale(0);
  } to {
    transform: scale(1) translateX(-50%) translateY(-50%);
  }
`;

export const Wrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
`;

export const Container = styled.div<Omit<IModalProps, 'setShowModal'>>`
  animation-name: ${showModalAnimation};
  animation-duration: 250ms;
  animation-fill-mode: forwards;

  position: absolute;
  top: 50%;
  left: 50%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;

  ${({ width, maxWidth, minWidth, theme: { colors } }) => css`
    width: ${width};
    max-width: ${maxWidth};
    min-width: ${minWidth};

    background-color: ${colors.white.main};
  `}

  min-height: 20%;

  border-radius: 10px;
  padding: 2rem;
`;

export const Head = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;

  padding-bottom: 1rem;

  ${({ theme: { colors } }) => css`
    border-bottom: 1px solid ${colors.gray.light};

    > button {
      background: ${colors.red.light};

      > svg {
        fill: ${colors.red.main};
      }
    }
  `}

  > span {
    font-size: 2rem;
    font-weight: 600;
  }

  > button {
    display: grid;
    place-items: center;

    width: 50px;
    height: 50px;

    border-radius: 50%;

    cursor: pointer;

    transition: all 250ms ease-in;

    > svg {
      width: 30px;
      height: 30px;
    }

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 100%;

  padding: 1rem 0;
`;
