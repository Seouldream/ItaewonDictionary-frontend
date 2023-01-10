import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BasicTemplates from '../../components/basicTemplate/BasicTemplates';
import useBasicTemplatesAdminFormStore from '../../hooks/useBasicTemplatesAdminFormStore';

const Container = styled.div`
  padding-inline: calc((100% - 1200px) / 2);
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
  padding: 0.6em;
}
`;

const PageButton = styled.button`
  background: #00C641;
  padding: 1em;
  border: none;
  display: flex;
  align-items: center;
  border-radius: 1em;
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

export default function BasicTemplatesPage() {
  const navigagte = useNavigate();
  const basicTemplatesStore = useBasicTemplatesAdminFormStore();

  useEffect(() => {
    basicTemplatesStore.fetchBasicTemplates();
  }, []);

  const { basicTemplates } = basicTemplatesStore;

  const handleClickNavigate = () => {
    navigagte('/practicalTemplates');
  };

  if (basicTemplates.length === 0) {
    return (
      <p>컨텐츠 준비중입니다. 잠시만 기다려주세요.</p>
    );
  }

  return (
    <Container>
      <Header>
        <span>STEP2</span>
        <h1>🔥 이태원에서 바로 먹히는 1분 완성 템플릿</h1>
        <p>
          일상 회화에서 자주 쓰는 표현들로만 모아보았어요!
          <br />
          다음을 발음해보고 따라하면서 익혀보아요!
        </p>
      </Header>
      <BasicTemplates
        basicTemplates={basicTemplates}
      />
      <Tail>
        <h2>기초 템플릿을 다 보았다면?</h2>
        <p>
          세번째 스텝! 이태원에서 바로 쓰이는 실전 템플릿 배우러가기
        </p>
        <PageButton
          type="button"
          onClick={handleClickNavigate}
        >
          <TextWrapper>
            STEP3 배우러 가기
          </TextWrapper>
          <ImgWrapper>
            <img
              src="https://itaewondictionary.s3.ap-northeast-2.amazonaws.com/Vector.png"
              alt="button-img"
            />
          </ImgWrapper>
        </PageButton>
      </Tail>
    </Container>
  );
}
