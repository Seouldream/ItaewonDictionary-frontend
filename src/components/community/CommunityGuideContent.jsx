/* eslint-disable jsx-a11y/media-has-caption */

import styled from 'styled-components';

const Container = styled.article`
  
  border-radius: 1em;
  box-shadow: 1em;
  padding: 2em 2em;
  background-color: white;
`;
const List = styled.ul`
  list-style: inside;
`;
export default function CommunityGuideContent() {
  return (
    <Container>
      <h1>커뮤니티 가이드 팁!</h1>
      <List>
        <li>
          소개: 안녕하세요 영어를 모두 널리 편하게 쓰고자 이 모임을 만들게 되었습니다...
          <br />
          인삿말과 스터디 모집 이유 및 스터디 내용을 적어주세요.
        </li>
        <li>
          활동이름: 활동을 명칭할 이름을 적어주세요.
          <br />
          <p>예) 고로시 영어!</p>
        </li>
        <li>
          활동 목표: 활동을 통해 얻어가고 싶은 것을 적어주세요 !
          <br />
          <p>예)</p>
          <p>여러사람들을 알아가요!</p>
          <p>모두 오픽 AL 받읍시다!</p>
        </li>
        <li>
          날짜:
        </li>
        <li>
          장소:
        </li>
        <li>
          규칙:
        </li>
        <li>
          스터디에 지원할 수 있는 방법을 남겨주세요. (이메일, 카카오 오픈채팅방, 구글폼 등.)
        </li>
      </List>
    </Container>
  );
}
