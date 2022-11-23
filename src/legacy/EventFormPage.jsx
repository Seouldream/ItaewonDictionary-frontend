/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prefer-stateless-function */
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

import { useNavigate } from 'react-router-dom';

import styled from 'styled-components';
import { useState } from 'react';
import useEventFormStore from './useEventFormStore';

const InputBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`;

export default function EventFormPage() {
  const [free, setFree] = useState(false);

  const [onlineIsSelected, setOnlineSelected] = useState(false);

  const [offlineIsSelected, setOfflineSelected] = useState(false);

  const navigate = useNavigate();

  const eventFormStore = useEventFormStore();

  const handleSubmit = (event) => {
    const {
      title,
      date,
      host,
      price,
      hostEmail,
      hostContact,
      onOrOffline,
      eventType,
      category,
      homepageAddress,
      imgUrl,
      hashTags,
      content,
    } = eventFormStore;

    const post = {
      title,
      date,
      host,
      price,
      hostEmail,
      hostContact,
      onOrOffline,
      eventType,
      category,
      homepageAddress,
      imgUrl,
      hashTags,
      content,
    };

    eventFormStore.createEvent(post);

    event.preventDefault();

    navigate('/events');
  };

  const handleChangeContent = (event, editor) => {
    const content = editor.getData();
    eventFormStore.changeContent(content);
  };

  const handleClickCheck = () => {
    setFree(!free);

    if (!free) {
      eventFormStore.changePrice('무료');
    }
  };

  const handleClickOnline = (event) => {
    const target = event.target.id;

    if (target === 'button-online') {
      setOnlineSelected(true);
      setOfflineSelected(false);
      eventFormStore.changeOnOrOffline('온라인');
    }

    if (target === 'button-offline') {
      setOfflineSelected(true);
      setOnlineSelected(false);
      eventFormStore.changeOnOrOffline('오프라인');
    }
  };

  return (
    <>
      <h1>이벤트 등록하기</h1>
      <InputBox>
        <label htmlFor="input-title">제목</label>
        <input
          id="input-title"
          type="text"
          name="title"
          value={eventFormStore.title}
          onChange={(e) => eventFormStore.changeTitle(e.target.value)}
        />
      </InputBox>
      <InputBox>
        <label htmlFor="input-date">일시</label>
        <input
          id="input-date"
          type="text"
          name="date"
          value={eventFormStore.date}
          onChange={(e) => eventFormStore.changeDate(e.target.value)}
        />
      </InputBox>
      <InputBox>
        <label htmlFor="input-host">주최</label>
        <input
          id="input-host"
          type="text"
          name="host"
          value={eventFormStore.host}
          onChange={(e) => eventFormStore.changeHost(e.target.value)}
        />
      </InputBox>
      <InputBox>
        <label htmlFor="input-price">가격</label>
        <input
          id="input-price"
          type="text"
          name="price"
          value={eventFormStore.price}
          onChange={(e) => eventFormStore.changePrice(e.target.value)}
          disabled={free}
        />
        <div>
          <label htmlFor="input-free">무료</label>
          <input
            id="input-free"
            type="checkbox"
            name="free"
            onClick={handleClickCheck}
          />
        </div>
      </InputBox>
      <InputBox>
        <label htmlFor="input-hostEmail">주최 담당자 이메일</label>
        <input
          id="input-hostEmail"
          type="text"
          name="hostEmail"
          value={eventFormStore.hostEmail}
          onChange={(e) => eventFormStore.changeHostEmail(e.target.value)}
        />
      </InputBox>
      <InputBox>
        <label htmlFor="input-hostContact">주최 담당자 연락처</label>
        <input
          id="input-hostContact"
          type="text"
          name="hostContact"
          value={eventFormStore.hostContact}
          onChange={(e) => eventFormStore.changeHostContact(e.target.value)}
        />
      </InputBox>
      <InputBox>
        <label htmlFor="input-imgUrl">커버 이미지</label>
        <input
          id="input-imgUrl"
          type="file"
          name="imgUrl"
          value={eventFormStore.imgUrl}
          onChange={(e) => eventFormStore.changeImgUrl(e.target.value)}
        />
      </InputBox>
      <button
        id="button-online"
        type="button"
        disabled={onlineIsSelected}
        onClick={handleClickOnline}
      >
        온라인
      </button>
      <button
        id="button-offline"
        type="button"
        disabled={offlineIsSelected}
        onClick={handleClickOnline}
      >
        오프라인
      </button>
      <div>
        <p>이벤트 유형</p>
        <input
          type="radio"
          id="input-conference"
          name="event-type"
          value="컨퍼런스 세미나"
          onChange={(e) => eventFormStore.changeEventType(e.target.value)}
        />
        {' '}
        <label htmlFor="input-conference">컨퍼런스 세미나</label>
        <p>다목적 용도의 행사입니다.</p>
      </div>
      <div>
        <input
          type="radio"
          id="input-class"
          name="event-type"
          value="클래스"
          onChange={(e) => eventFormStore.changeEventType(e.target.value)}
        />
        {' '}
        <label htmlFor="input-class">클래스</label>
        <p>교육용 목적의 행사를 열고 싶다면 선택하세요.</p>
      </div>
      <div>
        <input
          type="radio"
          id="input-gathering"
          name="event-type"
          value="모임"
          onChange={(e) => eventFormStore.changeEventType(e.target.value)}
        />
        {' '}
        <label htmlFor="input-gathering">모임</label>
        <p>취미 활동과 같은 자신만의 경험을 남들과 공유하고 싶다면 선택해 주세요.</p>
      </div>
      <InputBox>
        <label htmlFor="input-category">이벤트 카테고리</label>
        <select id="input-category" onChange={(e) => eventFormStore.changeCategory(e.target.value)}>
          <option defaultValue="카테고리없음">버튼을 눌러 카테고리를 추가하세요</option>
          <option value="IT/기술">IT/기술</option>
          <option value="스타트업">스타트업</option>
          <option value="커리어">커리어</option>
          <option value="취미">취미</option>
          <option value="디자인">디자인</option>
          <option value="비즈니스">비즈니스</option>
          <option value="음식&음료">음식&음료</option>
          <option value="프로그래밍">프로그래밍</option>
          <option value="홈&라이프스타일">홈&라이프스타일</option>
          <option value="여행">여행</option>
          <option value="자기계발">자기계발</option>
          <option value="스포츠">스포츠</option>
          <option value="금융">금융</option>
          <option value="건강">건강</option>
          <option value="마케팅">마케팅</option>
          <option value="파티">파티</option>
          <option value="독서">독서</option>
        </select>
      </InputBox>
      <InputBox>
        <label htmlFor="input-homepageAddress">이벤트 관련 홈페이지</label>
        <input
          id="input-homepageAddress"
          type="text"
          name="homepageAddress"
          value={eventFormStore.homepageAddress}
          onChange={(e) => eventFormStore.changeHomepageAddress(e.target.value)}
        />
      </InputBox>
      <InputBox>
        <label htmlFor="input-hashTags">해시태그</label>
        <p>최대 5개의 태그를 입력할 수 있어요</p>
        <textarea
          id="input-hashTags"
          type="text"
          name="hashTags"
          value={eventFormStore.hashTags}
          onChange={(e) => eventFormStore.changeHashTags(e.target.value)}
          placeholder="쉼표를 이용해 태그를 입력하세요."
          rows="5"
        />
      </InputBox>
      <div>
        <div>내용</div>
        <CKEditor
          editor={ClassicEditor}
          data="<p>Hello from CKEditor 5!</p>"
          name="content"
          onChange={handleChangeContent}
        />
      </div>
      <div>
        <button type="submit" onClick={handleSubmit}>
          글 등록하기
        </button>
      </div>
    </>
  );
}
