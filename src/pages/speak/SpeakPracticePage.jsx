import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import NormalButton from '../../components/common/NormalButton';
import SpeakContents from '../../components/speak/SpeakContents';
import SpeakGuideModal from '../../components/speak/SpeakGuideModal';

const Container = styled.div`
  padding-inline: calc((100% - 1200px) / 2);
`;

const ButtonBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;
export default function SpeakPracticePage() {
  const navigate = useNavigate();

  const handleClickNavigate = () => {
    const accessInformation = JSON.parse(localStorage.getItem('accessInformation'));

    const { accessToken } = accessInformation;

    if (accessToken) {
      navigate('/speak/new');
      return;
    }

    navigate('/login');
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
      <SpeakContents />
    </Container>
  );
}
