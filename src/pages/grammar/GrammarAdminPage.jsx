/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/control-has-associated-label */
import { ClassicEditor } from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { useEffect, useState } from 'react';
import GrammarIntroduction from '../../components/GrammarIntroduction';
import useGrammarAdminFormStore from '../../hooks/useGrammarAdminFormStore';
import useGrammarStore from '../../hooks/useGrammarStore';

export default function GrammarAdminPage() {
  const grammarStore = useGrammarStore();
  const grammarAdminFormStore = useGrammarAdminFormStore();

  const [isOpen, toggle] = useState(false);

  // ToDo 백엔드 생성후 오픈
  // const { grammar } = grammarStore;

  const grammar = {
    id: 1,
    introduction: '영어를 말하기 위해서 가장 기초적인 문법들만 모아놓았어요! 더 이상의 문법은 담지 않았어요. 나머지는 직접 쓰고 활용하면서 조금 더 익혀보도록 해요!',
    content: '1형식',
  };

  const { introduction } = grammarAdminFormStore;

  useEffect(() => {
    grammarStore.fetchGrammar();
    grammarAdminFormStore.changeIntroduction(grammar.introduction);
  }, []);

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

  const handleChangeIntroduction = (e) => {
    grammarAdminFormStore.changeIntroduction(e.target.value);
  };

  return (
    <>
      {' '}
      {grammar
        ? (
          <>
            <h1>스텝1! 이태원에서 바로 먹히는 영어 회화 실전 문법!</h1>
            {!isOpen
              && (
                <>
                  <p>{grammar.introduction}</p>
                  <button
                    isOpen={isOpen}
                    type="button"
                    onClick={handleClickOpenIntroduction}
                  >
                    인트로 수정하기
                  </button>
                </>
              ) }
            {isOpen ? (
              <>
                <GrammarIntroduction
                  introduction={introduction}
                  onChangeIntroduction={handleChangeIntroduction}
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
