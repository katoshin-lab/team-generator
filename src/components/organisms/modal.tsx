import React from 'react';
import styled from 'styled-components';

const Modal = ({ render, setOpenModal }) => {
  return (
    <StyledModal>
      <button onClick={() => setOpenModal(false)}>閉じる</button>
      { render() }
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
  height: fit-content;
  min-height: 300px;
  max-height: 90%;
  background-color: ${({theme}) => theme.light.second};
`

export default Modal;
