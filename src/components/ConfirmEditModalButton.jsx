import { useState } from 'react';
import Modal from 'styled-react-modal';

const StyledModal = Modal.styled`
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;

  `;

export default function ConfirmEditModalButton({
  onClickEdit,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = (e) => {
    setIsOpen(!isOpen);
  };

  const handleClickEdit = () => {
    toggleModal();
    onClickEdit();
  };

  return (
    <>
      <button type="button" onClick={toggleModal}>수정 완료</button>
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
      >
        <span>수정하시겠습니까?</span>
        <button
          type="button"
          onClick={handleClickEdit}
        >
          완료
        </button>
        <button
          type="button"
          onClick={toggleModal}
        >
          취소
        </button>
      </StyledModal>
    </>
  );
}
