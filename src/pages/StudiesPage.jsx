import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Studies from '../components/Studies';
import useStudiesStore from '../hooks/useStudiesStore';

const BoardMenu = styled.div`
  display: flex;
`;

export default function StudiesPage() {
  const navigate = useNavigate();

  const studiesStore = useStudiesStore();

  useEffect(() => {
    studiesStore.fetchStudies();
  }, []);

  const { studies } = studiesStore;

  console.log(studies);

  const handleClickWrite = () => {
    // TODO: 스터디 모집 작성 페이지로 이동
  };

  const handleChangeSearch = () => {
    // TODO: 검색 구현
  };

  const handleClickStudy = ({ id }) => {
    console.log('id', id);
    navigate(`/studies/${id}`, { state: { id } });

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
