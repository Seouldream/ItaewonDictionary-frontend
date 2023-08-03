import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import styled from 'styled-components';
import ConfirmEditModalButton from '../ConfirmEditModalButton';

const Container = styled.div`
  li {
    list-style: inside;
  }
`;

export default function GrammarContent({
  content, onChangeContent, onClickEditContent, handleClickCancelEditContent,
}) {
  const handleChangeContent = (event, editor) => {
    onChangeContent(editor);
  };

  const handleClickEditContent = () => {
    onClickEditContent();
  };

  return (
    <Container>
      <CKEditor
        editor={ClassicEditor}
        data={content}
        name="content"
        onChange={handleChangeContent}
      />
      <ConfirmEditModalButton
        onClickEdit={handleClickEditContent}
        handleClickCancel={handleClickCancelEditContent}
      />
    </Container>
  );
}
