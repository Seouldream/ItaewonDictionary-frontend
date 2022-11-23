/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prefer-stateless-function */
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { useNavigate } from 'react-router-dom';

import useTalkFormStore from '../hooks/useTalkFormStore';

export default function TalkFormPage() {
  const navigate = useNavigate();

  const talkFormStore = useTalkFormStore();

  const handleSubmit = (event) => {
    const { title, hashTags, content } = talkFormStore;

    const freeTalk = { title, hashTags, content };

    talkFormStore.createTalk(freeTalk);

    event.preventDefault();

    navigate('/talks');
  };

  const handleChangeContent = (event, editor) => {
    const content = editor.getData();
    talkFormStore.changeContent(content);
  };

  return (
    <>
      <h2>잡담소</h2>
      <div>
        <label htmlFor="input-title">제목</label>
        <input
          id="input-title"
          type="text"
          name="title"
          value={talkFormStore.title}
          onChange={(e) => talkFormStore.changeTitle(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="input-hashTags">해쉬태그</label>
        <input
          id="input-hashTags"
          type="text"
          name="hashTags"
          value={talkFormStore.hashTags}
          onChange={(e) => talkFormStore.changeHashTags(e.target.value)}
        />
      </div>
      <div>
        <div>내용</div>
        <CKEditor
          editor={ClassicEditor}
          data="<p>Hello from CKEditor 5!</p>"
          name="content"
          onChange={handleChangeContent}
        />
      </div>
      <div>
        <button type="submit" onClick={handleSubmit}>
          글 등록하기
        </button>
      </div>
    </>
  );
}
