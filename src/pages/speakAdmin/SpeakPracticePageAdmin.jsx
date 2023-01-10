import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import NormalButton from '../../components/common/NormalButton';
import SpeakGuideModal from '../../components/speak/SpeakGuideModal';
import SpeakContentsAdmin from '../../components/speakAdmin/SpeakContentsAdmin';

const Container = styled.div`
  padding-inline: calc((100% - 1200px) / 2);
`;

const ButtonBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

export default function SpeakPracticePageAdmin() {
  const navigate = useNavigate();
  const handleClickNavigate = () => {
    navigate('/speak/admin/new');
  };
  return (
    <Container>
      <h1>말하고 첨삭받기</h1>
      <ButtonBox>
        <SpeakGuideModal />
        <NormalButton
          type="button"
          onClick={handleClickNavigate}
        >
          글쓰기
        </NormalButton>
      </ButtonBox>
      <SpeakContentsAdmin />
    </Container>

  );
}
