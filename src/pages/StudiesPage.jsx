import { Navigate, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Studies from '../components/Studies';

const BoardMenu = styled.div`
  display: flex;
`;

const studies = [
  {
    id: 1,
    title: '사이드 프로젝트하실 프론트 한 분 구합니다',
    writer: '로지',
    createdDate: '2022. 10, 30',
    hashTags: ['javascript', 'react'],
    viewsCount: 0,
    commentsCount: 0,
    likesCount: 0,
  },
  {
    id: 2,
    title: '코딩 스터디 구함',
    writer: '아샬',
    createdDate: '2022. 10, 30',
    hashTags: ['javascript', 'react'],
    viewsCount: 0,
    commentsCount: 0,
    likesCount: 0,
  },
];

export default function StudiesPage() {
  const navigate = useNavigate();

  const handleClickWrite = () => {
    // TODO: 스터디 모집 작성 페이지로 이동
  };

  const handleChangeSearch = () => {
    // TODO: 검색 구현
  };

  const handleClickStudy = ({ id }) => {
    console.log(id);
    navigate(`/studies/${id}`);
    // TODO: 선택한 스터디 페이지로 이동
  };

  return (
    <div>
      <h2>스터디 게시판</h2>
      <BoardMenu>
        <button
          type="button"
          onClick={handleClickWrite}
        >
          작성하기
        </button>
        <label htmlFor="input-search">
          검색
        </label>
        <input
          id="input-search"
          name="search"
          value=""
          onChange={handleChangeSearch}
        />
        <button type="button">
          검색하기
        </button>
      </BoardMenu>
      <Studies
        studies={studies}
        onClickStudy={handleClickStudy}
      />
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </div>
  );
}
