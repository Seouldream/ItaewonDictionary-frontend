/* eslint-disable import/no-extraneous-dependencies */
import styled from 'styled-components';

export default function Banner() {
  return (
    <Container>
      <Wrapper>
        <em>이태원에서 먹히는 완벽 실전 영어 회화!</em>
        <strong>
          이태원 딕셔너리에 오신 것을
          <br />
          환영합니다.
        </strong>
        <p>이태원 뿐만 아니라 어디에서든 먹히는 제대로 된 영어를 무료로! 가르쳐드립니다.</p>
      </Wrapper>
      <BannerImgWrapper>
        <img
          src="https://itaewondictionary.s3.ap-northeast-2.amazonaws.com/ItaewonDictionaryLogo2-removebg.png"
          alt="Banner-Img"
          width="100%"
        />
      </BannerImgWrapper>
    </Container>
  );
}

const BannerImgWrapper = styled.div`
  position: absolute;
  width: 20vw;
  right: 12em;
  top: 8em;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 10em 0 10em;
  width: 100%;
  height: 18em;
  background-size: cover;
  background-color: #ECF7EE;
`;

const Wrapper = styled.article`
  font-weight: 700;
  em {
    font-size: ${((props) => props.theme.size.default)};
    color: #00C641;
  }
  strong {
    display: block;
    margin-block: 24px;
    font-size: ${((props) => props.theme.size.h4)};
    color: ${((props) => props.theme.text.primary)};
  }
  p {
    font-weight: 400;
    font-size: ${((props) => props.theme.size.default)};
  }
`;
