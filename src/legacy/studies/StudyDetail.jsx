import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useStudiesStore from '../../hooks/useStudiesStore';

export default function StudyDetail() {
  const studiesStore = useStudiesStore();

  const location = useLocation();

  const { id } = location.state;

  useEffect(() => {
    studiesStore.fetchStudy(id);
  }, []);

  const { study } = studiesStore;

  const { hashTags } = study;
  return (
    <div>
      {study && hashTags
        ? (
          <>
            <div>
              <article>
                <div>프로필 이미지</div>
                <div>{study.writer}</div>
                <div>{study.registrationDate}</div>
                <div>
                  조회수
                  {' '}
                  {study.views}
                </div>
              </article>
              <div>
                <div>스크랩아이콘</div>
              </div>
            </div>

            <h1>{study.title}</h1>
            <div>
              주졔:
              {' '}
              {study.topic}
            </div>
            <div>
              장소:
              {' '}
              {study.place}
            </div>
            <div>
              일시:
              {' '}
              {study.time}
            </div>
            <div>
              참가인원:
              {' '}
              {study.participants}
            </div>
            <div>{study.content}</div>
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
              {study.likes}
            </div>
            <div>
              조회수
              {' '}
              {study.views}
            </div>
          </>
        )
        : <p>Now Loading...</p>}
    </div>
  );
}
