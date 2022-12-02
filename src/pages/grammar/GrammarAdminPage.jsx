/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/control-has-associated-label */

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GrammarContent from '../../components/Grammar/GrammarContent';
import GrammarIntroduction from '../../components/Grammar/GrammarIntroduction';
import useGrammarAdminFormStore from '../../hooks/useGrammarAdminFormStore';
import useGrammarStore from '../../hooks/useGrammarStore';

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

  useEffect(() => {
    grammarStore.fetchGrammar();
    grammarAdminFormStore.changeIntroduction(grammar.introduction);
    grammarAdminFormStore.changeContent(grammar.content);
  }, []);

  const handleClickNavigateToCreateGrammar = () => {
    grammarAdminFormStore.clearTextArea();
    navigate('/grammar/admin/new');
  };

  const handleClickOpenIntroduction = () => {
    introToggle(true);
  };

  const handleClickOpenContent = () => {
    contentToggle(true);
  };

  const handleChangeIntroduction = (e) => {
    grammarAdminFormStore.changeIntroduction(e.target.value);
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
    <>
      <h1>스텝1!!! 이태원에서 바로 먹히는 영어 회화 실전 문법!</h1>
      <>
        {!introductionIsOpen
              && (
                <>
                  <pre>{grammar.introduction}</pre>
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
            handleClickCancelEditIntroduction={handleClickCancelEditIntroduction}
          />
        )
          : null}
        <hr />
        {!contentIsOpen
            && (
              <>
                {convertedContent}
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
    </>
  );
}
