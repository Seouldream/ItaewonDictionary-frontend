import { useState } from 'react';
import Modal from 'styled-react-modal';

const StyledModal = Modal.styled`
  width: 20rem;
  height: 20rem;
  display: flex;
  align-items: center;
  justify-content: center;

  `;

export default function ConfirmCreateModalButton({
  onClickCreate,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = (e) => {
    setIsOpen(!isOpen);
  };

  const handleClickCreate = () => {
    toggleModal();
    onClickCreate();
  };

  return (
    <>
      <button
        type="button"
        onClick={toggleModal}
      >
        작성 완료
      </button>
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
      >
        <span>저장하시겠습니까?</span>
        <button
          type="button"
          name="confirm"
          onClick={handleClickCreate}
        >
          확인
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
