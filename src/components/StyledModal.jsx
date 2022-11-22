import { useState } from 'react';
import Modal from 'styled-react-modal';

const StyledModal = Modal.styled`
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;

  `;

export default function FancyModalButton() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = (e) => {
    console.log('event', e);
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button type="button" onClick={toggleModal}>Click me</button>
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
      >
        <span>I am a modal!</span>
        <button type="button" onClick={toggleModal}>Close me</button>
      </StyledModal>
    </>
  );
}
