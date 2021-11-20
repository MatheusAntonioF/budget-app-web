import styled, { css, keyframes } from 'styled-components';

interface IContainerProps {
  type: string;
  itShouldBeRemove: boolean;
}

const showWithAnimation = keyframes`
  0% {
    right: -30%;
    opacity: 0;
  } 100% {
    right: 3%;
    opacity: 1;
  }
`;

const hiddenWithAnimation = keyframes`
  0% {
    right: 3%;
    opacity: 1;
    
  } 100% {
    right: -30%;
    opacity: 0;
  }
`;

export const Container = styled.div<IContainerProps>`
  position: absolute;

  top: 4%;

  animation-name: ${showWithAnimation};
  animation-duration: 500ms;
  animation-fill-mode: forwards;

  display: flex;
  align-items: center;

  width: auto;
  height: 100px;

  border-radius: 10px;

  > div.icon {
    display: grid;
    place-items: center;

    width: 20%;
    height: 100%;

    border-radius: 10px 0 0 10px;

    > svg {
      width: 45px;
      height: 45px;
    }
  }

  > div.content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;

    width: 80%;
    height: 100%;

    padding: 15px;

    background: pink;

    border-radius: 0 10px 10px 0;

    > p {
      font-size: 1.1rem;
      opacity: 0.8;

      &:last-child {
        font-size: 1rem;
        margin-top: 0.2rem;
      }
    }
  }

  ${({ theme: { colors }, type, itShouldBeRemove }) => {
    const mainColor = type === 'success' ? 'green' : 'red';

    return css`
      ${itShouldBeRemove &&
      css`
        animation-name: ${hiddenWithAnimation};
        animation-duration: 1s;
        animation-fill-mode: forwards;
      `}

      > div.icon {
        background: ${colors[mainColor].main};

        > svg {
          color: ${colors.white.main};
        }
      }

      > div.content {
        background: ${colors[mainColor].light};
      }
    `;
  }}
`;
