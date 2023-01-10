import { useState } from 'react';
import styled from 'styled-components';
import Modal from 'styled-react-modal';

const StyledModal = Modal.styled`
  background-color: white;
  opacity: 0.7;
  border-radius: 4em;
  width: 20rem;
  height: 13rem;
  display: flex;
  align-items: center;
  justify-content: center;
  `;

const AdminButton = styled.button`
  border-radius: 1em;
  background-color :#00C641;
  color:white;
  padding: 1em;
  border-style: none;
  margin: 1em 0.5em;
`;

export default function ConfirmDeleteModalButton({
  onClickDelete, message,
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
      <AdminButton
        type="button"
        onClick={toggleModal}
      >
        삭제하기
      </AdminButton>
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
      >
        <span>{message}</span>
        <AdminButton
          type="button"
          onClick={handleClickDelete}
        >
          완료
        </AdminButton>
        <AdminButton
          type="button"
          onClick={toggleModal}
        >
          취소
        </AdminButton>
      </StyledModal>
    </>
  );
}
