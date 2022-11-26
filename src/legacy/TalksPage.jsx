import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import FreeTalks from '../components/talks/Talks';
import useTalksStore from '../hooks/useTalksStore';

const BoardMenu = styled.div`
  display: flex;
`;

export default function FreeTalksPage() {
  const navigate = useNavigate();

  const talksStore = useTalksStore();

  useEffect(() => {
    talksStore.fetchFreeTalks();
  }, []);

  const { freeTalks } = talksStore;

  const { pageNumbers } = talksStore;

  const handleClickWrite = () => {
    navigate('/talks/post/new');
  };

  const handleChangeSearch = () => {
    // TODO: 검색 구현
  };

  const handleClickFreeTalk = ({ id }) => {
    navigate(`/talks/${id}`, { state: { id } });

    // TODO: 선택한 스터디 페이지로 이동
  };

  const handleClickChangePage = (pageNumber) => {
    // studiesStore.changePageNumber(pageNumber);
    navigate(`/talks?page=${pageNumber}`, { state: { pageNumber } });
  };

  return (
    <div>
      <h2>잡담소 게시판</h2>
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
      <FreeTalks
        freeTalks={freeTalks}
        onClickFreeTalk={handleClickFreeTalk}
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
