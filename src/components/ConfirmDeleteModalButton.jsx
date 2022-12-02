import { useState } from 'react';
import Modal from 'styled-react-modal';

const StyledModal = Modal.styled`
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;
  `;

export default function ConfirmDeleteModalButton({
  onClickDelete,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = (e) => {
    setIsOpen(!isOpen);
  };

  const handleClickDelete = () => {
    toggleModal();
    onClickDelete();
  };

  return (
    <>
      <button
        type="button"
        onClick={toggleModal}
      >
        삭제하기
      </button>
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
      >
        <span>삭제하시겠습니까?</span>
        <button
          type="button"
          onClick={handleClickDelete}
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
