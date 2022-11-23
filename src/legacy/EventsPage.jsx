import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Events from '../components/events/Events';
import useEventsStore from '../hooks/useEventsStore';

export default function EventsPage() {
  const navigate = useNavigate();

  const eventsStore = useEventsStore();

  useEffect(() => {
    eventsStore.fetchEvents();
  }, []);

  const { events } = eventsStore;

  const { pageNumbers } = eventsStore;

  const handleChangeSearch = () => {

  };
  const handleChangeType = () => {

  };
  const handleChangeCategory = () => {

  };

  const handleChangeCost = () => {

  };
  const handleClickSearch = () => {
    // ToDo 검색하기 기능 구현
  };
  const handleClickRegister = () => {
    navigate('/events/post/new');
    // ToDo 이벤트 등록하기 구현
  };

  const handleClickEvent = () => {

  };

  const handleClickChangePage = (pageNumber) => {
    eventsStore.changePageNumber(pageNumber);
    navigate(`/events?page=${pageNumber}`, { state: { pageNumber } });
  };

  return (
    <div>
      <h1>
        코쉘린에서
        <br />
        온라인 모임과
        <br />
        커뮤니티를 만나세요
      </h1>
      <h2>웨비나,모임,컨퍼런스 등 이벤트를 공유해주세요</h2>
      <div>
        <label htmlFor="input-search">검색어</label>
        <input
          id="input-search"
          type="text"
          name="search"
          value=""
          onChange={handleChangeSearch}
        />
        <label htmlFor="input-type">이벤트유형</label>
        <input
          id="input-type"
          type="text"
          name="type"
          value=""
          onChange={handleChangeType}
        />
        <label htmlFor="input-category">카테고리</label>
        <input
          id="input-category"
          type="text"
          name="category"
          value=""
          onChange={handleChangeCategory}
        />
        <label htmlFor="input-cost">유/무료</label>
        <input
          id="input-cost"
          type="text"
          name="cost"
          value=""
          onChange={handleChangeCost}
        />
        <button type="button" onClick={handleClickSearch}>검색</button>
      </div>
      <hr />
      <h3>최신 밋업꽈 따끈한 이벤트</h3>
      <p>등록된지 얼마 안된 따끈따끈한 이벤트를 만나봐요!</p>
      <button type="button" onClick={handleClickRegister}>이벤트 등록하러 가기</button>
      <Events
        events={events}
        onClickEvent={handleClickEvent}
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
