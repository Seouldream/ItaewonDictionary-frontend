import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useFreeTalksStore from '../hooks/useFreeTalksStore';

export default function FreeTalkDetail() {
  const freeTalksStore = useFreeTalksStore();

  const location = useLocation();

  const { id } = location.state;

  useEffect(() => {
    freeTalksStore.fetchFreeTalk(id);
  }, []);

  const { freeTalk } = freeTalksStore;

  const { freeTalkHashTags } = freeTalk;

  return (
    <div>
      {freeTalk && freeTalkHashTags
        ? (
          <>
            <div>
              <article>
                <div>프로필 이미지</div>
                <div>{freeTalk.writer}</div>
                <div>{freeTalk.registrationDate}</div>
                <div>
                  조회수
                  {' '}
                  {freeTalk.views}
                </div>
              </article>
              <div>
                <div>스크랩아이콘</div>
              </div>
            </div>
            <h1>{freeTalk.title}</h1>
            {freeTalk.content}
            <ul>
              {freeTalkHashTags.map((hashTag) => (
                <li key={hashTag.tag}>
                  #
                  {hashTag.tag}
                </li>
              ))}
            </ul>
            <div>
              추천수
              {' '}
              {freeTalk.likes}
            </div>
            <div>
              조회수
              {' '}
              {freeTalk.views}
            </div>
          </>
        )
        : <p>Now Loading...</p>}
    </div>
  );
}
