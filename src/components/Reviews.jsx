import styled from 'styled-components';

const Container = styled.div`
    padding-block: 2em 2em;
`;

const ReviewContainer = styled.article`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    padding-block: 1em;
`;

const Title = styled.h2`
  text-align: center;
  font-size: ${((props) => props.theme.size.h4)};
  font-weight: bold;
  margin: 0;
`;

const ReviewWrapper = styled.div`
    margin: 0.5em;
    padding: 4em 1.5em;
    border: 1px solid rgb(0, 0, 0);
    box-shadow: rgb(0 0 0) 2px 2px 3px 1px;
    background: url(https://megaptera.kr/images/icons/double-quotation-01.png) 5% 10% / 1em no-repeat, url(https://megaptera.kr/images/icons/double-quotation-02.png) 95% 90% / 1em no-repeat rgb(255, 255, 255);
    text-align: start;
`;

export default function Reviews() {
  return (
    <Container>
      <Title>🔔 커뮤니티 후기</Title>
      <ReviewContainer>
        <ReviewWrapper>
          <h3>
            물유학으로 커리어를 고민중인 3년차 워킹맘 중국 유학파 출신
            {' '}
            <span>민지룽룽씨</span>
          </h3>
          <p>
            <span>저 영어 너무 못해여. 나 어뜩해 .. 이거 하면 잘해지나요?</span>
            <span>
              아 망했어...아 어떡해.. 아 어떡해...
              네!?..아 28살 아들 하나 1살 딸 하나 둔 애 엄마입니다.
              육아 1년 차에 어떤 걸 공부해야 할지 모르는 게 부끄럽습니다.
            </span>

          </p>
        </ReviewWrapper>
        <ReviewWrapper>
          <h3>
            60년대 고액 울산 영어 유치원 출신
            {' '}
            <span>조코딩씨</span>
          </h3>
          <p>
            <span>영어 그까이꺼 대충 그냥 Hey~ yo~ go해주면 되는 줄 알았습니다.</span>
            <span>
              서울에서 인도식 사투리 영어 쓴다고 쿠사리를 받아서 어떻게 해야 할지 막막합니다.
              다시 영어를 배우고 싶지만 나이 때문에 막막합니다.
              3년 차에 어떤 걸 공부해야 할지 모르는 게 부끄럽습니다.
            </span>

          </p>
        </ReviewWrapper>
        <ReviewWrapper>
          <h3>
            발음을 너무 굴리가 혀가 꼬여버린
            {' '}
            <span>황이누씨</span>
          </h3>
          <p>
            <span>네!?...아...영어요..? 영어 좋죠 하하</span>
            <span>
              영어를 잘하고싶은데 스매쉬라는 앱 만드느라 방에 10년 박혀있어서 아무것도 못했습니다.
              사람이랑 대화를 어찌하는지도 잘 모르겠네요. 허허...
              영어 10년 차에 어떤 걸 공부해야 할지 모르는 게 부끄럽습니다.
            </span>

          </p>
        </ReviewWrapper>
      </ReviewContainer>
    </Container>
  );
}
