/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/control-has-associated-label */

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import GrammarContent from '../../components/grammar/GrammarContent';
import GrammarIntroduction from '../../components/grammar/GrammarIntroduction';
import useGrammarAdminFormStore from '../../hooks/useGrammarAdminFormStore';
import useGrammarStore from '../../hooks/useGrammarStore';

const Container = styled.div`
  padding-inline: calc((100% - 1200px) / 2);
`;

const ContentContainer = styled.article`
  li {
    list-style: inside;
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

const Wrapper = styled.div`
    margin: 0.5em;
    padding: 4em 1.5em;
    border: 1px solid rgb(0, 0, 0);
    box-shadow: rgb(0 0 0) 2px 2px 3px 1px;
    background: url(https://megaptera.kr/images/icons/double-quotation-01.png) 3% 5% / 1em no-repeat, url(https://megaptera.kr/images/icons/double-quotation-02.png) 95% 90% / 1em no-repeat rgb(255, 255, 255);
    text-align: start;
`;

const AdminButton = styled.button`
  border-radius: 1em;
  background-color :#00C641;
  color:white;
  padding: 1em;
  border-style: none;
  border-radius: 1em;
`;

export default function GrammarAdminPage() {
  const grammarStore = useGrammarStore();
  const grammarAdminFormStore = useGrammarAdminFormStore();

  const [introductionIsOpen, introToggle] = useState(false);

  const [contentIsOpen, contentToggle] = useState(false);

  const { grammar } = grammarStore;

  const { introduction, content } = grammarAdminFormStore;

  const navigate = useNavigate();

  function convertToHtml(element) {
    return <div dangerouslySetInnerHTML={{ __html: element }} />;
  }

  const convertedContent = convertToHtml(grammar.content);

  const convertedIntroduction = convertToHtml(grammar.introduction);

  useEffect(() => {
    grammarStore.fetchGrammar();
  }, []);

  const handleClickNavigateToCreateGrammar = () => {
    grammarAdminFormStore.clearTextArea();
    navigate('/grammar/admin/new');
  };

  const handleClickOpenIntroduction = () => {
    grammarAdminFormStore.changeIntroduction(grammar.introduction);
    introToggle(true);
  };

  const handleClickOpenContent = () => {
    grammarAdminFormStore.changeContent(grammar.content);
    contentToggle(true);
  };

  const handleChangeIntroduction = (editor) => {
    const modifiedIntroduction = editor.getData();
    grammarAdminFormStore.changeIntroduction(modifiedIntroduction);
  };

  const handleClickEditIntroduction = async () => {
    introToggle(false);
    await grammarAdminFormStore.patchIntroduction(introduction);
    grammarStore.fetchGrammar();
  };

  const handleChangeContent = (editor) => {
    const modifiedContent = editor.getData();

    grammarAdminFormStore.changeContent(modifiedContent);
  };

  const handleClickEditContent = async () => {
    contentToggle(false);
    await grammarAdminFormStore.patchContent(content);
    grammarStore.fetchGrammar();
  };

  const handleClickCancelEditIntroduction = () => {
    introToggle(false);
  };

  const handleClickCancelEditContent = () => {
    contentToggle(false);
  };

  if (!grammar.id) {
    return (
      <div>
        <h1>문법 컨텐츠가 없다면?</h1>
        <button type="button" onClick={handleClickNavigateToCreateGrammar}>
          첫 문법 컨텐츠 만들러 가기
        </button>
      </div>
    );
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
        {!introductionIsOpen
              && (
                <>
                  <IntroWrapper>
                    <IntroMessage>알기 전 잠깐 상식!</IntroMessage>
                    {convertedIntroduction}
                  </IntroWrapper>
                  <AdminButton
                    type="button"
                    onClick={handleClickOpenIntroduction}
                  >
                    안내 문구 수정하기
                  </AdminButton>
                </>
              ) }
        {introductionIsOpen ? (
          <GrammarIntroduction
            introduction={introduction}
            onChangeIntroduction={handleChangeIntroduction}
            onClickEditIntroduction={handleClickEditIntroduction}
            handleClickCancelEditIntroduction={handleClickCancelEditIntroduction}
          />
        )
          : null}
        <hr />
        {!contentIsOpen
            && (
              <>
                <Wrapper>
                  <ContentWrapper>
                    {convertedContent}
                  </ContentWrapper>
                </Wrapper>
                <AdminButton
                  type="button"
                  onClick={handleClickOpenContent}
                >
                  그래마 컨텐츠 수정하기
                </AdminButton>
              </>
            )}
        {contentIsOpen ? (
          <GrammarContent
            content={content}
            onChangeContent={handleChangeContent}
            onClickEditContent={handleClickEditContent}
            handleClickCancelEditContent={handleClickCancelEditContent}
          />
        )
          : null}
      </ContentContainer>
    </Container>
  );
}
