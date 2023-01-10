import styled from 'styled-components';
import CommentOnSpeakPractice from './CommentOnSpeakPractice';

const List = styled.ul`
  margin: 0;
  padding: 0;
`;
export default function CommentsOnSpeakPractice({
  comments,
}) {
  return (
    <List>
      {comments.map((comment) => (
        <CommentOnSpeakPractice
          key={comment.id}
          comment={comment}
        />
      )) }
    </List>
  );
}
