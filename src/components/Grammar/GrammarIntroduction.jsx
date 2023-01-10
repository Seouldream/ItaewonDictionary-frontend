import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import styled from 'styled-components';
import ConfirmEditModalButton from '../ConfirmEditModalButton';

const EditorBox = styled.div`
  padding-top: 1em;
`;
export default function GrammarIntroduction({
  introduction, onChangeIntroduction, onClickEditIntroduction,
  handleClickCancelEditIntroduction,
}) {
  const handleChangeIntroduction = (event, editor) => {
    onChangeIntroduction(editor);
  };

  const handleClickEditIntroduction = () => {
    onClickEditIntroduction();
  };

  return (
    <div>
      <label
        hidden
        htmlFor="input-introduction"
      >
        수정하기
      </label>
      <EditorBox>
        <CKEditor
          editor={ClassicEditor}
          data={introduction}
          name=""
          onChange={handleChangeIntroduction}
        />
        <ConfirmEditModalButton
          onClickEdit={handleClickEditIntroduction}
          handleClickCancel={handleClickCancelEditIntroduction}
        />
      </EditorBox>
    </div>
  );
}
