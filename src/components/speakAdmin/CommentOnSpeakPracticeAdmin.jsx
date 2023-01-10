export default function CommentOnSpeakPracticeAdmin({
  comment,
}) {
  return (

    <div>
      <hr />
      <p>{comment.comment}</p>
      <p>
        작성자:
        {' '}
        {comment.userName}
      </p>
      <p>{comment.createdAt}</p>
    </div>
  );
}
