import Study from './Study';

export default function Studies({ studies, onClickStudy }) {
  return (
    <ul>
      {studies.map((study) => (
        <Study
          key={study.id}
          study={study}
          onClickStudy={onClickStudy}
        />
      ))}
    </ul>
  );
}
