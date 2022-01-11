import styled, { keyframes } from 'styled-components';

const showAnimated = keyframes`
  from {
    opacity: 0;
    bottom: -50%;
  } to {
    bottom: 0%;
    opacity: 1;
  }
`;

const showMainIconAnimated = keyframes`
  from {
    width: 0px;
    height: 0px;

  } to {
    width: 100%;
    height: 200px;
  }
`;

export const Container = styled.div`
  display: grid;
  place-items: center;

  width: 100%;
  height: 100%;

  background: rgb(81, 140, 253);
  background: linear-gradient(
    101deg,
    rgba(81, 140, 253, 1) 5%,
    rgba(64, 180, 231, 1) 86%
  );

  overflow: hidden;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: flex-start;

  width: 100%;
  max-width: 400px;

  height: 400px;

  border-radius: 5px;

  position: relative;

  animation: ${showAnimated};
  animation-duration: 1s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in-out;

  background: ${({ theme: { colors } }) => colors.white.main};

  > img {
    position: absolute;

    width: 0px;
    height: 0px;

    animation: ${showMainIconAnimated};
    animation-delay: 800ms;
    animation-duration: 500ms;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in-out;

    transform: translateY(-125px);
  }

  > form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;

    margin-top: 7rem;

    padding: 0 4rem;

    width: 100%;
    height: 100%;
  }
`;
