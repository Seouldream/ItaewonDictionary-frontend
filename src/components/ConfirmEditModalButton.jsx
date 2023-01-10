import { useState } from 'react';
import styled from 'styled-components';
import Modal from 'styled-react-modal';

const StyledModal = Modal.styled`
  background-color: white;
  opacity: 0.9;
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

export default function ConfirmEditModalButton({
  onClickEdit, handleClickCancel,
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
      <AdminButton
        type="button"
        onClick={toggleModal}
      >
        수정 완료
      </AdminButton>
      <AdminButton
        type="button"
        onClick={handleClickCancel}
      >
        취소
      </AdminButton>
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
      >
        <span>수정하시겠습니까?</span>
        <AdminButton
          type="button"
          onClick={handleClickEdit}
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
