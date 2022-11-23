export default function Talk({ freeTalk, onClickFreeTalk }) {
  const {
    id, title, writer, registrationDate, hashTags,
    views, comments, likes,
  } = freeTalk;

  const handleClickFreeTalk = () => {
    onClickFreeTalk({ id });
  };

  return (
    <li>
      <button type="button" onClick={handleClickFreeTalk}>
        <div>{writer}</div>
        <div>{registrationDate}</div>
        <h3>{title}</h3>
        <ul>
          {hashTags.map((hashTag) => (
            <li key={`${id}-${hashTag}`}>
              #
              {hashTag}
            </li>
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
