import CommentOnSpeakPracticeAdmin from './CommentOnSpeakPracticeAdmin';

export default function CommentsOnSpeakPracticeAdmin({
  comments,
}) {
  return (
    <ul>
      {comments.map((comment) => (
        <CommentOnSpeakPracticeAdmin
          key={comment.id}
          comment={comment}
        />
      )) }
    </ul>
  );
}
