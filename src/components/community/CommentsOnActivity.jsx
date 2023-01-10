import styled from 'styled-components';
import CommentOnActivity from './CommentOnActivity';

const List = styled.ul`
  margin: 0;
  padding: 0;
`;

export default function CommentsOnActivity({
  comments,
}) {
  return (
    <List>
      {comments.map((comment) => (
        <CommentOnActivity
          key={comment.id}
          comment={comment}
        />
      )) }
    </List>
  );
}
