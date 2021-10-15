import React from 'react';
import styled from 'styled-components';
import DownwordFade from '../atoms/downwordFade';

const Modal = ({ render, setOpenModal }) => {

  return (
    <StyledModal>
      <DownwordFade>
          <button onClick={() => setOpenModal(false)}>閉じる</button>
          {render()}
      </DownwordFade>
    </StyledModal>
  )
}

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  min-width: 300px;
  max-width: 600px;
  height: 10%;
  min-height: 300px;
  max-height: 90%;
  border-radius: 10px;
  >div {
    background-color: ${({ theme }) => theme.light.second};
  }
`

export default Modal;
