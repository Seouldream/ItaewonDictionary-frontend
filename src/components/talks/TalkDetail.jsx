import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useTalksStore from '../../hooks/useTalksStore';

export default function TalkDetail() {
  function convertToHtml(element) {
    return <div dangerouslySetInnerHTML={{ __html: element }} />;
  }

  const talksStore = useTalksStore();

  const location = useLocation();

  const { id } = location.state;

  useEffect(() => {
    talksStore.fetchFreeTalk(id);
  }, []);

  const { freeTalk } = talksStore;

  const convertedContent = convertToHtml(freeTalk.content);

  const { hashTags } = freeTalk;

  return (
    <div>
      {freeTalk && hashTags
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
            {convertedContent}
            <ul>
              {hashTags.map((hashTag) => (
                <li key={hashTag}>
                  #
                  {hashTag}
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
