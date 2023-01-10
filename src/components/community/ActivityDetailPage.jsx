/* eslint-disable jsx-a11y/media-has-caption */
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useCommunityStore from '../../hooks/useCommunityStore';
import useActivityCommentsStore from '../../hooks/useActivityCommentsStore';
import useConvertToHtml from '../../hooks/useConvertToHtml';

import CommentsOnActivity from './CommentsOnActivity';
import Input from '../common/Input';

const Container = styled.div`
  padding-inline: calc((100% - 1200px) / 2);
`;

const Button = styled.button`
  display: block;
  font-size: 1em;
  border: none;
  border-radius: 1em;
  width:5em;
  height: 2em;
  margin-top: 1em;
  padding: 0.3em;
  color:white;
  background-color: #00C641;
  cursor: pointer;
`;

const CommentBox = styled.div`
  border: 1px #d9d9d9 solid;
  border-radius: 0.5rem;
  padding-inline: 1em;
  padding-block: 0.5em;
`;

export default function ActivityDetailPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const { id } = location.state;

  const communityStore = useCommunityStore();
  const activityCommentsStore = useActivityCommentsStore();

  useEffect(() => {
    communityStore.fetchActivity(id);
    activityCommentsStore.fetchCommentsByActivityId(id);
  }, []);

  const { activity } = communityStore;

  const content = useConvertToHtml(activity.content);
  const { comments } = activityCommentsStore;

  const accessInformation = JSON.parse(localStorage.getItem('accessInformation'));

  const { accessToken } = accessInformation;

  const { name } = accessInformation;

  const handleClickCreateComment = async () => {
    if (!accessToken) {
      navigate('/login');
      return;
    }

    await activityCommentsStore.createComment(id, accessToken);

    await activityCommentsStore.fetchCommentsByActivityId(id);
  };

  return (
    <Container>
      <h1>{activity.title}</h1>
      <div>
        {content}
      </div>
      <CommentsOnActivity
        comments={comments}
      />
      <CommentBox>
        {accessToken
          ? (
            <p>
              {name}
              님, 의견을 남겨보세요!
            </p>
          ) : <p>로그인 하시면 댓글을 남길 수 있어요!</p>}
        <label htmlFor="input-comment">
          💭
        </label>
        <Input
          id="input-comment"
          type="text"
          value={activityCommentsStore.comment}
          onChange={(e) => activityCommentsStore.changeComment(e.target.value)}
        />
        <Button
          type="button"
          onClick={handleClickCreateComment}
        >
          답변 등록
        </Button>
      </CommentBox>
    </Container>
  );
}
