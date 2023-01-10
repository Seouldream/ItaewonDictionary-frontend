import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import useGrammarStore from '../../hooks/useGrammarStore';

const Container = styled.div`
  padding-inline: calc((100% - 1200px) / 2);
`;

const ContentContainer = styled.article`
  
  li {
    list-style: inside;
    margin: 0.2em;
  }

  h2 {
    font-size: 2em;
  }

  h4 {
    font-size: 1.7em;
  }
`;

const Header = styled.div`

padding-block: 2em 2em;
border-bottom: solid 1px #D9D9D9;

p {
  line-height: 1.4em;
}
 ;

  span {
    color :#00C641;
    font-size: 1.5em;
    font-weight: bold;
  }

p {
  background-color: #ECF7EE;
  width:fit-content;
  padding: 0.3em;
}
`;

const Wrapper = styled.div`
    margin: 0.5em;
    padding: 4em 1.5em;
    border: 1px solid rgb(0, 0, 0);
    box-shadow: rgb(0 0 0) 2px 2px 3px 1px;
    background: url(https://megaptera.kr/images/icons/double-quotation-01.png) 3% 5% / 1em no-repeat, url(https://megaptera.kr/images/icons/double-quotation-02.png) 95% 90% / 1em no-repeat rgb(255, 255, 255);
    text-align: start;
`;

const IntroMessage = styled.p`
  color :#00C641;
  font-weight: bold;
`;

const IntroWrapper = styled.div`
  padding-block: 2em 2em;
`;

const ContentWrapper = styled.div`
  padding-block: 2em 2em;
`;

const PageButton = styled.button`
  background: #00C641;
  padding: 1em;
  border: none;
  border-radius: 1em;
  a {
  display: flex;
  align-items: center;
  }
  
`;

const TextWrapper = styled.div`
padding-inline-end: 0.4em;
color:white;
`;

const ImgWrapper = styled.div`
`;

const Tail = styled.div`
  padding-block: 2em 2em;
  margin: 0;
`;

export default function GrammarPage() {
  const grammarStore = useGrammarStore();

  const { grammar } = grammarStore;

  useEffect(() => {
    grammarStore.fetchGrammar();
  }, []);

  function convertToHtml(element) {
    return <div dangerouslySetInnerHTML={{ __html: element }} />;
  }

  const convertedContent = convertToHtml(grammar.content);

  const convertedIntroduction = convertToHtml(grammar.introduction);

  if (!grammar.id) {
    return <p>화면을 로딩중입니다. 조금만 기다려주세요!</p>;
  }

  return (
    <Container>
      <Header>
        <span>STEP1</span>
        <h1>🔥 이태원에서 바로 먹히는 영어 회화 실전 문법!</h1>
        <p>
          영어를 말하기 위해서 가장 기초적인 문법들만 모아놓았어요! 더 이상의 문법은 담지 않았어요.
          <br />
          나머지는 직접 쓰고 활용하면서 조금 더 익혀보도록 해요.
        </p>
      </Header>
      <ContentContainer>
        <IntroWrapper>
          <IntroMessage>알기 전 잠깐 상식!</IntroMessage>
          {convertedIntroduction}
        </IntroWrapper>
        <Wrapper>
          <ContentWrapper>
            {convertedContent}
          </ContentWrapper>
        </Wrapper>
      </ContentContainer>
      {grammarStore.isNoGrammar ? (
        <div>{grammarStore.errorMessage}</div>
      ) : null}
      <Tail>
        <h2>실전 문법을 완료했다면?</h2>
        <p>
          두번째 스텝! 이태원에서 바로먹히는 1분 완성 템플릿 배우러가기
        </p>
        <PageButton>
          <Link
            to="/basicTemplates"
          >
            <TextWrapper>
              STEP2 배우러 가기
            </TextWrapper>
            <ImgWrapper>
              <img
                src="https://itaewondictionary.s3.ap-northeast-2.amazonaws.com/Vector.png"
                alt="button-img"
              />
            </ImgWrapper>
          </Link>
        </PageButton>
      </Tail>
    </Container>
  );
}
