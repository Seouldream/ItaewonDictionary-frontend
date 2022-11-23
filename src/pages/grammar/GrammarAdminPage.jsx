/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/control-has-associated-label */

import { useEffect, useState } from 'react';
import GrammarContent from '../../components/Grammar/GrammarContent';
import GrammarIntroduction from '../../components/Grammar/GrammarIntroduction';
import useGrammarAdminFormStore from '../../hooks/useGrammarAdminFormStore';
import useGrammarStore from '../../hooks/useGrammarStore';

export default function GrammarAdminPage() {
  const grammarStore = useGrammarStore();
  const grammarAdminFormStore = useGrammarAdminFormStore();

  const [introductionIsOpen, introToggle] = useState(false);

  const [contentIsOpen, contentToggle] = useState(false);

  // ToDo 백엔드 생성후 오픈
  const { grammar } = grammarStore;

  const { introduction, content } = grammarAdminFormStore;

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
          </>
        )
        : <p>조금만 기다려주세요!</p>}
    </>
  );
}
