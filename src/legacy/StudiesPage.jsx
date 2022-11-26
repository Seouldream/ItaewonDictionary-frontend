import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Studies from '../components/studies/Studies';

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

  const { pageNumbers } = studiesStore;

  const handleClickWrite = () => {
    navigate('/studies/post/new');
  };

  const handleChangeSearch = () => {
    // TODO: 검색 구현
  };

  const handleClickStudy = ({ id }) => {
    navigate(`/studies/${id}`, { state: { id } });

    // TODO: 선택한 스터디 페이지로 이동
  };

  const handleClickChangePage = (pageNumber) => {
    studiesStore.changePageNumber(pageNumber);
    navigate(`/studies?page=${pageNumber}`, { state: { pageNumber } });
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
      <nav>
        <ul>
          {pageNumbers.map((pageNumber) => (
            <li key={pageNumber}>
              <button type="button" onClick={() => handleClickChangePage(pageNumber)}>
                {pageNumber}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
