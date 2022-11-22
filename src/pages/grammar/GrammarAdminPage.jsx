/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/control-has-associated-label */

import { useEffect, useState } from 'react';
import { ModalProvider } from 'styled-react-modal';
import GrammarContent from '../../components/Grammar/GrammarContent';
import GrammarIntroduction from '../../components/Grammar/GrammarIntroduction';
import FancyModalButton from '../../components/StyledModal';
import useGrammarAdminFormStore from '../../hooks/useGrammarAdminFormStore';
import useGrammarStore from '../../hooks/useGrammarStore';

export default function GrammarAdminPage() {
  const grammarStore = useGrammarStore();
  const grammarAdminFormStore = useGrammarAdminFormStore();

  const [introductionIsOpen, introToggle] = useState(false);

  const [contentIsOpen, contentToggle] = useState(false);

  // ToDo 백엔드 생성후 오픈
  // const { grammar } = grammarStore;

  const grammar = {
    id: 1,
    introduction: '영어를 말하기 위해서 가장 기초적인 문법들만 모아놓았어요! 더 이상의 문법은 담지 않았어요. 나머지는 직접 쓰고 활용하면서 조금 더 익혀보도록 해요!',
    content: '1형식 주어 + 동사 하나의 주어와 목적어를 필요로하지 않는 동사가 합쳐져 ~ … **첫번째는 자동사와 타동사 그리고 완전과 불완전이라는 용어입니다.** - 목적어 **없으면** 자동사- 목적어 **있으면** 타동사 - 보어가 **필요 없으면** 완전',
  };

  const { introduction } = grammarAdminFormStore;

  const { content } = grammarAdminFormStore;

  useEffect(() => {
    grammarStore.fetchGrammar();
    grammarAdminFormStore.changeIntroduction(grammar.introduction);
    grammarAdminFormStore.changeContent(grammar.content);
  }, []);

  const handleClickOpenIntroduction = () => {
    introToggle(true);
  };

  const handleClickOpenContent = () => {
    contentToggle(true);
  };

  const handleChangeGrammar = (event, editor) => {
    // ToDo CK에디터 핸들 체인지 구현필요
    // const content = editor.getData();
    // grammarFormStore.changeContent(content);
  };

  const handleChangeIntroduction = (e) => {
    grammarAdminFormStore.changeIntroduction(e.target.value);
  };

  const handleClickEditIntroduction = () => {
    introToggle(false);
    // ToDo : 서버를 만들때 완성 필요
    // grammarAdminFormStore.patchIntroduction(introduction);
  };

  const handleChangeContent = (editor) => {
    const modifiedContent = editor.getData();
    grammarAdminFormStore.changeContent(modifiedContent);
  };

  const handleClickEditContent = () => {
    contentToggle(false);
    // ToDo : 서버를 만들때 완성 필요
    // grammarAdminFormStore.patchContent(content);
  };

  return (
    <>
      {' '}
      {grammar
        ? (
          <>
            <h1>스텝1! 이태원에서 바로 먹히는 영어 회화 실전 문법!</h1>
            {!introductionIsOpen
              && (
                <>
                  <p>{grammar.introduction}</p>
                  <button
                    type="button"
                    onClick={handleClickOpenIntroduction}
                  >
                    안내 문구 수정하기
                  </button>
                </>
              ) }
            {introductionIsOpen ? (
              <GrammarIntroduction
                introduction={introduction}
                onChangeIntroduction={handleChangeIntroduction}
                onClickEditIntroduction={handleClickEditIntroduction}
              />
            )
              : null}
            <hr />
            {!contentIsOpen
            && (
              <>
                <p>{grammar.content}</p>
                <button
                  type="button"
                  onClick={handleClickOpenContent}
                >
                  그래마 컨텐츠 수정하기
                </button>
              </>
            )}
            {contentIsOpen ? (
              <GrammarContent
                content={content}
                onChangeContent={handleChangeContent}
                onClickEditContent={handleClickEditContent}
              />
            )
              : null}
            <FancyModalButton />
          </>
        )
        : <p>조금만 기다려주세요!</p>}
    </>
  );
}
