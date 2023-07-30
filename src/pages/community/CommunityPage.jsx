import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import NormalButton from '../../components/common/NormalButton';
import CommunityContents from '../../components/community/CommunityContents';
import CommunityGuideModal from '../../components/community/CommunityGuideModal';

const Container = styled.div`
  padding-inline: calc((100% - 1200px) / 2);
`;

const ButtonBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;
export default function CommunityPage() {
  const accessInformation = JSON.parse(localStorage.getItem('accessInformation'));

  const { accessToken } = accessInformation || '';

  const navigate = useNavigate();
  const handleClickNavigate = () => {
    if (accessToken) {
      navigate('/community/new');
      return;
    }

    navigate('/login');
  };

  return (
    <Container>
      <h1>활동에 참여도 하고 개설도 하면서 진짜 영어를 배워요!</h1>
      <p>⬇️커뮤니티 개설이 처음이시라면? 영어 스터디 운영 N년차가 알려주는 쌉 Tip</p>
      <ButtonBox>
        <CommunityGuideModal />
        <NormalButton
          type="button"
          onClick={handleClickNavigate}
        >
          글쓰기
        </NormalButton>
      </ButtonBox>
      <CommunityContents />
    </Container>
  );
}
