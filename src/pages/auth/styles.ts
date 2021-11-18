import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  place-items: center;

  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: flex-start;

  width: 100%;
  max-width: 450px;

  height: 500px;

  border-radius: 5px;

  background: ${({ theme: { colors } }) => colors.white.main};
`;
