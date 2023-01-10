import ConfirmEditModalButton from '../ConfirmEditModalButton';

export default function UpdatePracticalTemplateAdmin({
  practicalTemplate,
  practicalTemplateForm,
  handleChangeCategory,
  handleChangeTitle,
  handleChangeDescription,
  handleChangeKoreanSentence,
  handleChangeBestPractice,
  handleClickEdit,
  handleClickCancel,
}) {
  return (
    <>
      <div>
        <label htmlFor="category">카테고리</label>
        <input
          id="input-category"
          value={practicalTemplateForm.category}
          onChange={handleChangeCategory}
        />
      </div>
      <span>카테고리명을 수정하시면 다른 카테고리명으로 템플릿이 생성되거나 타 카테고리에 귀속될 수 있습니다.</span>
      <div>
        <label htmlFor="title">제목</label>
        <input
          id="input-title"
          value={practicalTemplateForm.title}
          onChange={handleChangeTitle}
        />
      </div>
      <div>
        <label htmlFor="description">상황설명</label>
        <input
          id="input-description"
          value={practicalTemplateForm.description}
          onChange={handleChangeDescription}
        />
      </div>
      <div>
        <label htmlFor="koreanSentence">한글해석</label>
        <input
          id="input-koreanSentence"
          value={practicalTemplateForm.koreanSentence}
          onChange={handleChangeKoreanSentence}
        />
      </div>
      <div>
        <label htmlFor="bestPractice">베스트 프렉티스</label>
        <input
          id="input-bestPractice"
          value={practicalTemplateForm.bestPractice}
          onChange={handleChangeBestPractice}
        />
      </div>
      <div>
        <label htmlFor="record">녹음파일</label>
        <input
          id="input-record"
          type="file"
          name="record"
          accept="audio/*"
        />
      </div>
      <ConfirmEditModalButton
        onClickEdit={() => handleClickEdit(practicalTemplate)}
        handleClickCancel={handleClickCancel}
      />
      <hr />
    </>
  );
}
