/* eslint-disable jsx-a11y/control-has-associated-label */
import { ClassicEditor } from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GrammarIntroduction from '../../components/GrammarIntroduction';
import useGrammarStore from '../../hooks/useGrammarStore';

export default function GrammarAdminPage() {
  const grammarStore = useGrammarStore();

  const [isOpen, toggle] = useState(false);

  useEffect(() => {
    grammarStore.fetchGrammar();
  }, []);

  // ToDo 백엔드 생성후 오픈
  // const { grammar } = grammarStore;

  const grammar = {
    id: 1,
    introduction: '영어를 말하기 위한 가장 기초적인 문법들만 모아놓았어요!',
    content: '1형식',
  };

  const handleClickOpenIntroduction = () => {
    toggle(true);
  };

  const handleClickCloseIntroduction = () => {
    toggle(false);
  };

  const handleChangeGrammar = (event, editor) => {
    // ToDo CK에디터 핸들 체인지 구현필요
    // const content = editor.getData();
    // grammarFormStore.changeContent(content);
  };

  const handleChangeIntroduction = () => {

  };

  return (
    <>
      {' '}
      {grammar
        ? (
          <>
            <h1>스텝1! 이태원에서 바로 먹히는 영어 회화 실전 문법!</h1>
            {grammar.introduction}
            <button
              isOpen={isOpen}
              type="button"
              onClick={handleClickOpenIntroduction}
            >
              인트로 수정하기
            </button>
            {isOpen ? (
              <>
                <GrammarIntroduction
                  introduction={grammar.introduction}
                  onChange={handleChangeIntroduction}
                />
                <button
                  isOpen={isOpen}
                  type="button"
                  onClick={handleClickCloseIntroduction}
                >
                  수정완료
                </button>
              </>
            )
              : null}

            <p>{grammar.content}</p>
            <div>
              <div>내용</div>
              <CKEditor
                editor={ClassicEditor}
                data="<p>Hello from CKEditor 5!</p>"
                name="content"
                onChange={handleChangeGrammar}
              />
            </div>
          </>
        )
        : <p>조금만 기다려주세요!</p>}
    </>
  );
}
