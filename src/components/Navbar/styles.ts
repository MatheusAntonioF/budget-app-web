import styled, { css, keyframes } from 'styled-components';

const openDropdownAnimation = keyframes`
  0% {
    opacity: 0;
    width: 0%;
    height: 0%;

  } 100% {
    opacity: 1;
    visibility: visible;
    width: 80px;

  }
`;

export const Container = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 80px;

  padding: 0 10rem;

  background: ${({ theme: { colors } }) => colors.white.main};

  > img {
    width: 70px;
    height: 70px;
  }
`;

export const Profile = styled.div`
  position: relative;

  display: flex;
  align-items: center;

  > p {
    margin-right: 20px;
    font-weight: 600;
  }

  > div.user {
    display: grid;
    place-items: center;

    width: 65px;
    height: 65px;

    padding: 5px;

    background: linear-gradient(
      101deg,
      rgba(81, 140, 253, 1) 5%,
      rgba(64, 180, 231, 1) 86%
    );

    border-radius: 50%;

    > img {
      width: 100%;
      height: 100%;

      border-radius: 50%;
    }
  }
`;

export const ButtonDropdown = styled.button<{ dropdownIsOpen: boolean }>`
  display: grid;
  place-items: center;

  margin-left: 20px;

  cursor: pointer;

  > svg {
    width: 20px;
    height: 20px;

    transform: rotate(90deg);
    transition: all 200ms ease-in;
  }

  ${({ dropdownIsOpen }) =>
    dropdownIsOpen &&
    css`
      > svg {
        transform: rotate(270deg);
      }
    `}
`;

export const Dropdown = styled.div<{ open: boolean }>`
  position: absolute;
  top: 80px;
  right: 0px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  width: 80px;
  min-height: 38px;

  visibility: hidden;

  padding: 5px;

  border-radius: 4px;

  ${({ theme: { colors } }) => css`
    background: ${colors.primary.light};

    > button:hover {
      background: ${colors.primary.main};

      color: ${colors.white.main};
      opacity: 0.9;
    }
  `}

  ${({ open }) =>
    open &&
    css`
      animation-name: ${openDropdownAnimation};
      animation-delay: 100ms;
      animation-duration: 250ms;
      animation-fill-mode: forwards;
    `}

  > button {
    display: flex;
    align-items: center;

    width: 100%;
    height: 35px;

    font-size: 15px;

    padding: 0 5px;
    border-radius: 4px;

    cursor: pointer;

    transition: background color 200ms ease-in;

    > svg {
      margin-left: 15px;
    }
  }
`;
