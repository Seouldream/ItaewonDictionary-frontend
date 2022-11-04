export default function FreeTalk({ freeTalk, onClickFreeTalk }) {
  const {
    id, title, writer, registrationDate, freeTalkHashTags,
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
          {freeTalkHashTags.map((hashTag) => (
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
