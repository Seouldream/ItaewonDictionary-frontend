import PracticalTemplate from './PracticalTemplate';

export default function PracticalTemplates({
  practicalTemplates, handleChangeAnswer, handleClickNavigateToCategory,
}) {
  if (practicalTemplates.length === 0) {
    return <p>컨텐츠가 아직 없습니다.</p>;
  }
  return (
    <ul>
      {practicalTemplates.map((practicalTemplate) => (
        <PracticalTemplate
          key={practicalTemplate.id}
          practicalTemplate={practicalTemplate}
          handleChangeAnswer={handleChangeAnswer}
          handleClickNavigateToCategory={handleClickNavigateToCategory}
        />
      ))}
    </ul>
  );
}
