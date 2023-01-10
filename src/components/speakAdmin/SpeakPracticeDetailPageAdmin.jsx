/* eslint-disable jsx-a11y/media-has-caption */
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import useSpeakPracticeCommentsStore from '../../hooks/useSpeakPracticeCommentsStore';
import useSpeakPracticesStore from '../../hooks/useSpeakPracticesStore';
import useSpeakPracticesAdminStore from '../../hooks/useSpeakPracticesAdminStore';
import Input from '../common/Input';
import CommentsOnSpeakPracticeAdmin from './CommentsOnSpeakPracticeAdmin';
import ConfirmDeleteModalButton from '../ConfirmDeleteModalButton';

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

export default function SpeakPracticeDetailPageAdmin() {
  const location = useLocation();

  const navigate = useNavigate();

  const { id } = location.state;

  const speakPracticesStore = useSpeakPracticesStore();
  const speakPracticeCommentsStore = useSpeakPracticeCommentsStore();
  const speakPracticesAdminStore = useSpeakPracticesAdminStore();

  useEffect(() => {
    speakPracticesStore.fetchPractice(id);
    speakPracticeCommentsStore.fetchCommentsByPracticeId(id);
  }, []);

  const { practice } = speakPracticesStore;

  const { comments } = speakPracticeCommentsStore;

  const accessInformation = JSON.parse(localStorage.getItem('accessInformation'));

  const { accessToken } = accessInformation;

  const { name } = accessInformation;

  const handleClickDelete = async () => {
    await speakPracticesAdminStore.deletePractice(id);
    navigate('/speak/admin');
  };

  const deleteConfirmMessage = '정말로 삭제하시겠습니까?';

  const handleClickUploadComment = async () => {
    await speakPracticeCommentsStore.createComment(id, accessToken);

    await speakPracticeCommentsStore.fetchCommentsByPracticeId(id);
  };

  return (
    <Container>
      <ConfirmDeleteModalButton
        onClickDelete={handleClickDelete}
        message={deleteConfirmMessage}
      />
      <h1>{practice.title}</h1>
      <p>
        작성자:
        {' '}
        {practice.userNickname}
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
      <CommentsOnSpeakPracticeAdmin
        comments={comments}
      />
      <CommentBox>
        <p>
          {name}
          님 의견을 남겨보세요!
        </p>
        <label htmlFor="input-comment">
          💭
        </label>
        <Input
          id="input-comment"
          type="text"
          value={speakPracticeCommentsStore.comment}
          onChange={(e) => speakPracticeCommentsStore.changeComment(e.target.value)}
        />
        <Button
          type="button"
          onClick={handleClickUploadComment}
        >
          답변 등록
        </Button>
      </CommentBox>
    </Container>
  );
}
