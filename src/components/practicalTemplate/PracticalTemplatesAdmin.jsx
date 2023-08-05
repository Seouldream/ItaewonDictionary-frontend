import PracticalTemplateAdmin from './PracticalTemplateAdmin';

export default function PracticalTemplatesAdmin({
  practicalTemplates, isOpen, setIsOpen,
  practicalTemplateForm,
  handleChangeCategory,
  handleChangeTitle,
  handleChangeDescription,
  handleChangeKoreanSentence,
  handleChangeBestPractice,
  handleClickEdit,
  handleClickCancel,
  handleClickNavigateToCategory,
  category,
  categoryId,
}) {
  if (practicalTemplates.length === 0) {
    return <p>컨텐츠를 불러오는 중 입니다.</p>;
  }
  return (
    <ul>
      {practicalTemplates.map((practicalTemplate) => (
        <PracticalTemplateAdmin
          key={practicalTemplate.id}
          practicalTemplate={practicalTemplate}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          practicalTemplateForm={practicalTemplateForm}
          handleChangeCategory={handleChangeCategory}
          handleChangeTitle={handleChangeTitle}
          handleChangeDescription={handleChangeDescription}
          handleChangeKoreanSentence={handleChangeKoreanSentence}
          handleChangeBestPractice={handleChangeBestPractice}
          handleClickEdit={handleClickEdit}
          handleClickCancel={handleClickCancel}
          handleClickNavigateToCategory={handleClickNavigateToCategory}
          category={category}
          categoryId={categoryId}
        />
      ))}
    </ul>
  );
}
