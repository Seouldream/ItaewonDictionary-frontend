import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useStudiesStore from '../hooks/useStudiesStore';

export default function StudyDetail() {
  const studiesStore = useStudiesStore();

  useEffect(() => {
    console.log('useffect');
    studiesStore.fetchStudies();
  }, []);

  const location = useLocation();

  // console.log(location);

  const studyId = location.state.id;

  const { studies } = studiesStore;
  // console.log('studies', studies);
  const study = studies.find((element) => element.id === studyId);
  // console.log('study', study);
  if (!study) {
    return console.log('없음');
  }

  // console.log(study.id);
  return (
    <div>
      {study
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
            <div>{study.content}</div>
            <ul>
              {study.hashTags.map((hashTag) => (
                <li key={hashTag.id}>
                  #
                  {hashTag.tag}
                </li>
              ))}
            </ul>
            <div>
              좋아요수
              {' '}
              {study.likes}
            </div>
          </>
        )
        : <p>Now Loading...</p>}
    </div>
  );
}
