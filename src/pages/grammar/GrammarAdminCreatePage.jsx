/* eslint-disable react/no-unknown-property */
/* eslint-disable jsx-a11y/control-has-associated-label */

import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { useNavigate } from 'react-router-dom';
import ConfirmCreateModalButton from '../../components/ConfirmCreateModalButton';
import useGrammarAdminFormStore from '../../hooks/useGrammarAdminFormStore';

export default function GrammarAdminCreatePage() {
  const grammarAdminFormStore = useGrammarAdminFormStore();

  const navigate = useNavigate();

  const handleChangeIntroduction = (event) => {
    grammarAdminFormStore.changeIntroduction(event.target.value);
  };

  const handleChangeContent = (event, editor) => {
    const content = editor.getData();
    grammarAdminFormStore.changeContent(content);
  };

  const handleClickCreate = () => {
    const { introduction, content } = grammarAdminFormStore;

    const grammar = { introduction, content };

    grammarAdminFormStore.createGrammar(grammar);

    navigate('/grammar/admin');
  };

  return (
    <>
      <div>
        <label htmlFor="grammar-introduction">문법 페이지 안내글</label>
        <textarea
          id="grammar-introduction"
          placeholder="문법에 관련된 첫 소개글을 작성해주세요!"
          value={grammarAdminFormStore.introduction}
          onChange={handleChangeIntroduction}
          cols="30"
        />
      </div>
      <div>문법 컨텐츠</div>
      <CKEditor
        editor={ClassicEditor}
        data="<p>문법을 작성해주세요.</p>"
        name="content"
        onChange={handleChangeContent}
      />
      <ConfirmCreateModalButton
        onClickCreate={handleClickCreate}
      />
    </>
  );
}
