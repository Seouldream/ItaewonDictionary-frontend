export default function Study({ study, onClickStudy }) {
  const {
    id, title, writer, registrationDate, hashTags,
    views, comments, likes,
  } = study;

  const handleClickStudy = () => {
    onClickStudy({ id });
  };

  return (
    <li>
      <button type="button" onClick={handleClickStudy}>
        <div>{writer}</div>
        <div>{registrationDate}</div>
        <h3>{title}</h3>
        <ul>
          {hashTags.map((hashTag) => (
            <li key={`${id}-${hashTag.tag}`}>{hashTag.tag}</li>
          ))}
        </ul>
        <div>
          views:
          {' '}
          {views}
        </div>
        <div>
          comments:
          {' '}
          {comments}
        </div>
        <div>
          likes:
          {' '}
          {likes}
        </div>
      </button>
    </li>
  );
}
