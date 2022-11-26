import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ConfirmEditModalButton from '../ConfirmEditModalButton';

export default function GrammarContent({
  content, onChangeContent, onClickEditContent,
}) {
  const handleChangeContent = (event, editor) => {
    onChangeContent(editor);
  };

  const handleClickEditContent = () => {
    onClickEditContent();
  };

  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        data={content}
        name=""
        onChange={handleChangeContent}
      />
      <ConfirmEditModalButton
        onClickEdit={handleClickEditContent}
      />
    </div>
  );
}
