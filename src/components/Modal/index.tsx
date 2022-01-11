import React from 'react';

import { createPortal } from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';

import { Wrapper, Container, Head, Body } from './styles';

const DOCUMENT_NODE = document.getElementById('root') as HTMLElement;

export interface IModalProps {
  title?: string;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  setShowModal: () => void;
}

const Modal: React.FC<IModalProps> = ({
  children,
  width = '50%',
  minWidth = '400px',
  maxWidth = '800px',
  title = 'Modal title',
  setShowModal,
}) => {
  return createPortal(
    <Wrapper>
      <Container width={width} minWidth={minWidth} maxWidth={maxWidth}>
        <Head>
          <span>{title}</span>
          <button type="button" onClick={setShowModal}>
            <AiOutlineClose />
          </button>
        </Head>
        <Body>{children}</Body>
      </Container>
    </Wrapper>,
    DOCUMENT_NODE,
  );
};

export default Modal;
