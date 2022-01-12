import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;

  div.input-group {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > div {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 48%;
    }
  }

  > button {
    margin-top: 1rem;
  }
`;
