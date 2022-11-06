/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prefer-stateless-function */
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import useFreeTalkFormStore from '../hooks/useFreeTalkFormStore';

export default function FreeTalkFormPage() {
  const freeTalkFormStore = useFreeTalkFormStore();

  const handleSubmit = (event) => {
    const { title, freeTalkHashTags, content } = freeTalkFormStore;

    const freeTalk = { title, freeTalkHashTags, content };
    console.log(freeTalk);
    freeTalkFormStore.createFreeTalk(freeTalk);

    event.preventDefault();
  };

  return (
    <>
      <h2>잡담소</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="input-title">제목</label>
          <input
            id="input-title"
            type="text"
            name="title"
            value={freeTalkFormStore.title}
            onChange={(e) => freeTalkFormStore.changeTitle(e.target.value)}

          />
        </div>
        <div>
          <label htmlFor="input-freeTalkHashTags">해쉬태그</label>
          <input
            id="input-freeTalkHashTags"
            type="text"
            name="freeTalkHashTags"
            value={freeTalkFormStore.freeTalkHashTags}
            onChange={(e) => freeTalkFormStore.changeHashTags(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="input-content">내용</label>
          <CKEditor
            editor={ClassicEditor}
            data="<p>Hello from CKEditor 5!</p>"
            id="input-content"
            type="text"
            name="content"
            onReady={(editor) => {
            // You can store the "editor" and use when it is needed.
            // console.log('Editor is ready to use!', editor);
            }}
            onChange={(event, editor) => {
              const content = editor.getData();
              freeTalkFormStore.changeContent(content);
              console.log({ event, editor, content });
            }}
            onBlur={(event, editor) => {
            // console.log('Blur.', editor);
            }}
            onFocus={(event, editor) => {
            // console.log('Focus.', editor);
            }}
          />
        </div>
        <div>
          <button type="submit">
            글 등록하기
          </button>
        </div>
      </form>
    </>
  );
}
