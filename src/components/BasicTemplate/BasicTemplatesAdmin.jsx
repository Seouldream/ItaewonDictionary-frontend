import BasicTemplateAdmin from './BasicTemplateAdmin';

export default function BasicTemplatesAdmin({
  isOpen,
  basicTemplates,
  basicTemplateForm,
  handleChangeTitle,
  handleChangeEnglishSentence,
  handleChangeKoreanSentence,
  handleChangeDescription,
  handleChangeYoutubeUrl,
  handleClickOpenBasicTemplateUpdateForm,
  handleClickCancelUpdate,
  handleClickConfirmUpdate,
  handleClickDeleteBasicTemplate,
}) {
  return (
    <ul>
      {basicTemplates.map((basicTemplate, index) => (
        <BasicTemplateAdmin
          key={basicTemplate.id}
          isOpen={isOpen}
          basicTemplateForm={basicTemplateForm}
          basicTemplate={basicTemplate}
          index={index}
          handleChangeTitle={handleChangeTitle}
          handleChangeEnglishSentence={handleChangeEnglishSentence}
          handleChangeKoreanSentence={handleChangeKoreanSentence}
          handleChangeDescription={handleChangeDescription}
          handleChangeYoutubeUrl={handleChangeYoutubeUrl}
          handleClickOpenBasicTemplateUpdateForm={handleClickOpenBasicTemplateUpdateForm}
          handleClickCancelUpdate={handleClickCancelUpdate}
          handleClickConfirmUpdate={handleClickConfirmUpdate}
          handleClickDeleteBasicTemplate={handleClickDeleteBasicTemplate}
        />
      ))}
    </ul>
  );
}
