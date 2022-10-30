export default function Study({ study, onClickStudy }) {
  const {
    id, title, writer, createdDate, hashTags,
    viewsCount, commentsCount, likesCount,
  } = study;

  const handleClickStudy = () => {
    onClickStudy({ id });
  };

  return (
    <li>
      <button type="button" onClick={handleClickStudy}>
        <div>{writer}</div>
        <div>{createdDate}</div>
        <h3>{title}</h3>
        <ul>
          {hashTags.map((hashTag) => (
            <li key={`${id}-${hashTag}`}>{hashTag}</li>
          ))}
        </ul>
        <div>
          views:
          {' '}
          {viewsCount}
        </div>
        <div>
          comments:
          {' '}
          {commentsCount}
        </div>
        <div>
          likes:
          {' '}
          {likesCount}
        </div>
      </button>
    </li>
  );
}
