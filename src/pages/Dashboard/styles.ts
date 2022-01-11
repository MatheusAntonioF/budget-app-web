import styled from 'styled-components';

export const Container = styled.div``;

export const ButtonCreateNewSpending = styled.button`
  position: fixed;
  bottom: 5%;
  right: 4%;

  display: grid;
  place-items: center;

  width: 50px;
  height: 50px;

  border-radius: 50%;

  cursor: pointer;

  transition: all 250ms ease-in;

  background: ${({ theme: { colors } }) => colors.primary.main};

  > svg {
    width: 70%;
    height: 70%;

    color: #fff;
  }

  &:hover {
    transform: scale(1.1);
  }
`;
