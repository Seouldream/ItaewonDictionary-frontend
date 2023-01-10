import styled from 'styled-components';
import EditInput from '../common/EditInput';
import ConfirmEditModalButton from '../ConfirmEditModalButton';

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 3fr 1fr;
  
  div {
    display: grid;
    grid-template-columns: 8em 1fr;  
    text-align: left;
    align-items: center;

    input {
      margin-top: 0.8em;
      height: 4em;
    }
  }
`;

const EditTextArea = styled.textarea`
margin-top: 0.8em;
width: 50%;
padding: 1.5em;
height: 15em;
resize: none;
border: 1px solid ${(props) => (props.error ? props.theme.colors.red : props.theme.colors.border)};
color: ${((props) => props.theme.text.gray)};
& + & {
  margin-top: 16px;
}

:focus {
  outline: none;
  border: 1px solid ${(props) => (props.error ? props.theme.colors.red : props.theme.colors.primary)};
}
`;

export default function BasicTemplateEditForm({
  isOpen,
  basicTemplateForm,
  handleChangeTitle,
  handleChangeEnglishSentence,
  handleChangeKoreanSentence,
  handleChangeDescription,
  handleChangeYoutubeUrl,
  handleClickConfirmUpdate,
  handleClickCancelUpdate,
}) {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <Container>
        <div>
          <label htmlFor="input-title">제목</label>
          <EditInput
            id="input-title"
            name="title"
            value={basicTemplateForm.title}
            onChange={handleChangeTitle}
          />
        </div>
        <div>
          <label htmlFor="input-englishSentence">영어문장</label>
          <EditInput
            id="input-englishSentence"
            name="englishSentence"
            value={basicTemplateForm.englishSentence}
            onChange={handleChangeEnglishSentence}
          />
        </div>
        <div>
          <label htmlFor="input-koreanSentence">한글문장</label>
          <EditInput
            id="input-koreanSentence"
            name="koreanSentence"
            value={basicTemplateForm.koreanSentence}
            onChange={handleChangeKoreanSentence}
          />
        </div>
        <div>
          <label htmlFor="input-description">상황설명</label>
          <EditTextArea
            id="input-description"
            name="description"
            value={basicTemplateForm.description}
            onChange={handleChangeDescription}
          />
        </div>
        <div>
          <label htmlFor="input-youtubeUrl">예시 유튜브 링크</label>
          <EditInput
            id="input-youtubeUrl"
            name="youtubeUrl"
            value={basicTemplateForm.youtubeUrl}
            onChange={handleChangeYoutubeUrl}
          />
        </div>
      </Container>
      <ConfirmEditModalButton
        onClickEdit={() => handleClickConfirmUpdate(basicTemplateForm.id)}
        handleClickCancel={handleClickCancelUpdate}
      />
    </>
  );
}
