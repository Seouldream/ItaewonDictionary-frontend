import { useState } from 'react';
import styled from 'styled-components';
import Modal from 'styled-react-modal';
import SpeakGuideContent from './SpeakGuideContent';

const StyledModal = Modal.styled`
  background-color: white;
  
  opacity: 1;
  // border-radius: 4em;
  width: 60rem;
  height: 70rem;
  // display: flex;
  // align-items: center;
  // justify-content: center;
  `;

const AdminButton = styled.button`
  border-radius: 1em;
  background-color :#00C641;
  color:white;
  padding: 1em;
  border-style: none;
  margin: 1em 0.5em;
`;

export default function SpeakGuideModal() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = (e) => {
    setIsOpen(!isOpen);
  };

  const handleClickEdit = () => {
    toggleModal();
  };

  return (
    <>
      <AdminButton
        type="button"
        onClick={toggleModal}
      >
        말하기 가이드
      </AdminButton>
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
      >
        <SpeakGuideContent />
        <AdminButton
          type="button"
          onClick={handleClickEdit}
        >
          확인
        </AdminButton>
      </StyledModal>
    </>
  );
}
