import styled from 'styled-components';

const CommentBox = styled.div`
  border-top: solid 1px #d0d0d0;
`;
export default function CommentOnSpeakPractice({
  comment,
}) {
  return (
    <CommentBox>
      <p>{comment.comment}</p>
      <p>
        작성자:
        {' '}
        {comment.userName}
      </p>
      <p>{comment.createdAt}</p>
    </CommentBox>
  );
}
