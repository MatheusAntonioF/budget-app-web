import styled, { css } from 'styled-components';

export const Container = styled.div<{ hasError: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  width: 100%;

  min-height: 90px;

  div.container-error {
    visibility: hidden;
    height: 19px;
  }

  ${({ theme: { colors }, hasError }) => css`
    & > label {
      font-size: 16px;
      font-weight: 600;
      height: 22px;
      color: ${colors.primary.main};

      transition: all 200ms ease-in;
    }

    &:focus-within,
    &:hover {
      div.icon > svg {
        transform: scale(1.1);
        color: ${colors.primary.main};
      }

      > div {
        border-color: ${colors.primary.main};
      }
    }

    ${hasError &&
    css`
      > label,
      div.container-error {
        color: ${colors.red.main};
      }
      div.container-error {
        visibility: visible;
        font-size: 14px;
        background: inherit;
      }

      > div {
        border-color: ${colors.red.main} !important;
      }

      div.icon > svg {
        color: ${colors.red.main} !important;
      }
    `}
  `}
`;

export const Core = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  border: 2px solid ${({ theme: { colors } }) => colors.grey.light};

  height: 35px;
  width: 100%;

  border-radius: 5px;

  background: ${({ theme: { colors } }) => colors.white.main};
  transition: all 250ms ease-in;

  div.icon {
    display: grid;
    place-items: center;
    width: 35px;
    height: 106%;
    border-radius: 0 5px 5px 0;

    &,
    & > svg {
      margin-left: -1px;
    }

    & > svg {
      width: 18px;
      height: 18px;

      color: ${({ theme: { colors } }) => colors.grey.dark};

      transition: all 250ms ease-in;
    }
  }

  & > input {
    outline: 0;
    border: 0;

    background: inherit;

    width: 100%;

    padding: 5px;
    padding-left: 10px;
    margin-right: 2px;

    transition: all 250ms ease-in;
  }
`;
