import { useState } from 'react';
import styled from 'styled-components';
import Modal from 'styled-react-modal';
import CommunityGuideContent from './CommunityGuideContent';

const StyledModal = Modal.styled`  

  opacity: 1;
  border-radius: 4em;
  width: 100%;
  height: 100vh;
  `;

const Wrapper = styled.div`
   position: fixed;
   top:50%;
   left:50%;
   transform: translate(-50%,-50%);
   display: flex;
   align-items: center;
   flex-direction: column;
`;

const AdminButton = styled.button`
  border-radius: 1em;
  background-color :#00C641;
  color:white;
  padding: 1em;
  border-style: none;
  margin: 1em 0.5em;
`;

export default function CommunityGuideModal() {
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
        커뮤니티 가이드
      </AdminButton>
      <StyledModal
        isOpen={isOpen}
        onBackgroundClick={toggleModal}
        onEscapeKeydown={toggleModal}
      >
        <Wrapper>
          <CommunityGuideContent />
          <AdminButton
            type="button"
            onClick={handleClickEdit}
          >
            확인
          </AdminButton>
        </Wrapper>
      </StyledModal>
    </>
  );
}
