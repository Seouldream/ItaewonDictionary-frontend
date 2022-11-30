import ConfirmEditModalButton from '../ConfirmEditModalButton';

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
      <div>
        <label htmlFor="input-title">제목</label>
        <input
          id="input-title"
          name="title"
          value={basicTemplateForm.title}
          onChange={handleChangeTitle}
        />
      </div>
      <div>
        <label htmlFor="input-englishSentence">영어문장</label>
        <input
          id="input-englishSentence"
          name="englishSentence"
          value={basicTemplateForm.englishSentence}
          onChange={handleChangeEnglishSentence}
        />
      </div>
      <div>
        <label htmlFor="input-koreanSentence">한글문장</label>
        <input
          id="input-koreanSentence"
          name="koreanSentence"
          value={basicTemplateForm.koreanSentence}
          onChange={handleChangeKoreanSentence}
        />
      </div>
      <div>
        <label htmlFor="input-description">상황설명</label>
        <input
          id="input-description"
          name="description"
          value={basicTemplateForm.description}
          onChange={handleChangeDescription}
        />
      </div>
      <div>
        <label htmlFor="input-youtubeUrl">예시 유튜브 링크</label>
        <input
          id="input-youtubeUrl"
          name="youtubeUrl"
          value={basicTemplateForm.youtubeUrl}
          onChange={handleChangeYoutubeUrl}
        />
      </div>
      <ConfirmEditModalButton
        onClickEdit={handleClickConfirmUpdate}
        handleClickCancel={handleClickCancelUpdate}
      />
    </>
  );
}
