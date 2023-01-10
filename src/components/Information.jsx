import styled from 'styled-components';

const Container = styled.article`
    display: grid;
    grid-template-columns: repeat(5,1fr);
    padding-block: 2em 2em;
    border-bottom: 1px solid #D9D9D9;
    align-items: center;
`;

const TextWrapper = styled.div`
    grid-column: 1 / 4;
    padding-inline: 3em;

    p {
        font-size: 1em;
        margin: 0;
    }
`;

const Title = styled.h1`
    margin: 0;
    padding-block: 0 1em;
    font-size: 2rem;
`;

const ImageWrapper = styled.div`
  height:15em;
  width: 27em;
  img {
    width: 100%;
    height: 100%;
    border-radius: 1em;
  }
  grid-column: 4 / 6;
`;

export default function Information() {
  return (
    <Container>
      <TextWrapper>
        <Title>
          어떻게 하면
          <br />
          영어를 단기간에
          <br />
          잘 할 수 있을까요?
        </Title>
        <p>
          영어를 단기간에 잘 하시려면 빠르게 배우시고 바로 바로 적용해서 사용해보는 것이 중요합니다.
          영어는 전 세계인의 공용어가 된 만큼 정답이 있지 않기때문에 배운 것을 다소 서툴더라도 바로 바로
          써보고 입을 트이게 하는 것이 가장 중요합니다.
          이를 위해선 주변 환경을 영어를 쓸 수 밖에 없는 환경을 만들거나 영어를 자주 접하는 환경으로 만드는 것이 좋습니다.
          이태원 딕셔너리는 이러한 환경을 가장 빠르고 확실하게 만들어주는 서비스 중 하나입니다.
        </p>
      </TextWrapper>
      <ImageWrapper>
        <img
          src="https://thumb.mt.co.kr/06/2020/10/2020100610502800555_1.jpg/dims/resize/1200/crop/1200x630!/optimize/"
          alt="information-img"
        />
      </ImageWrapper>
    </Container>
  );
}
