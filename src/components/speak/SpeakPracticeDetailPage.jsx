/* eslint-disable jsx-a11y/media-has-caption */
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useSpeakPracticeCommentsStore from '../../hooks/useSpeakPracticeCommentsStore';
import useSpeakPracticesStore from '../../hooks/useSpeakPracticesStore';
import Input from '../common/Input';
import NormalButton from '../common/NormalButton';
import CommentsOnSpeakPractice from './CommentsOnSpeakPractice';

const Container = styled.div`
  padding-inline: calc((100% - 1200px) / 2);
`;

const CommentBox = styled.div`
  border: 1px #d9d9d9 solid;
  border-radius: 0.5rem;
  padding-inline: 1em;
  padding-block: 0.5em;
`;

export default function SpeakPracticeDetailPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const { id } = location.state;

  const speakPracticesStore = useSpeakPracticesStore();
  const speakPracticeCommentsStore = useSpeakPracticeCommentsStore();

  useEffect(() => {
    speakPracticesStore.fetchPractice(id);
    speakPracticeCommentsStore.fetchCommentsByPracticeId(id);
  }, []);

  const { practice } = speakPracticesStore;

  const { comments } = speakPracticeCommentsStore;

  const accessInformation = JSON.parse(localStorage.getItem('accessInformation'));

  const { accessToken } = accessInformation;

  const { name } = accessInformation;

  const handleClickCreateComment = async () => {
    if (!accessToken) {
      navigate('/login');
      return;
    }

    await speakPracticeCommentsStore.createComment(id, accessToken);

    await speakPracticeCommentsStore.fetchCommentsByPracticeId(id);
  };

  return (
    <Container>
      <h1>{practice.title}</h1>
      <p>
        작성자:
        {' '}
        {practice.userName}
      </p>
      <p>🍟 1. 상황설명</p>
      <p>{practice.situation}</p>
      <p>✍🏻 2. 영어로 써보기</p>
      <p>{practice.englishScript}</p>
      <p>3.한글로 상황설명 해보기.</p>
      <p>{practice.koreanScript}</p>
      <p>📟 녹음 파일</p>
      <figure>
        <figcaption />
        <audio
          controls
          src={practice.recordUrl}
        >
          <a href={practice.recordUrl}>
            Download audio
          </a>
        </audio>
      </figure>
      <CommentsOnSpeakPractice
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
          value={speakPracticeCommentsStore.comment}
          onChange={(e) => speakPracticeCommentsStore.changeComment(e.target.value)}
        />
        <p />
        <NormalButton
          type="button"
          onClick={handleClickCreateComment}
        >
          답변등록
        </NormalButton>
      </CommentBox>
    </Container>
  );
}
