import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const ArticleContainer = styled.article`
  display: flex;
`;

const ContentContainer = styled.div`
  display: flex;
`;

export default function EventDetail() {
  // const eventsStore = useEventsStore();

  // const location = useLocation();

  // const { id } = location.state;

  useEffect(() => {
    // eventsStore.fetchEvent(id);
  }, []);

  // const { event } = eventsStore;

  // const { hashTags } = event;
  const event = {
    id: 1,
    title: '클라우드 & IT 테크 온라인 컨퍼런스 디지털 스펙트럼 2022',
    date: '11월 10일(목)오프라인',
    host: '메가테라',
    price: '무료',
    hostEmail: 'megapTera2021@google.com',
    hostContact: '010-1123-3534',
    onOrOffline: '온라인',
    eventType: '컨퍼런스 세미나',
    category: '프로그래밍',
    homepageAddress: 'https://megaptera.kr/',
    imgUrl: 'https://cdn.pixabay.com/photo/2022/10/20/12/36/germany-7534750__480.jpg',
    content: '메가존클라우드의 클라우드&디지털 테크 컨퍼런스 디지털 스펙트럼이 더욱 유익한 콘텐츠와 다양한 혜택으로 다시 찾아왔습니다.',
  };

  const eventHashTags = ['서울기록원', '아카이브', 'archives'];

  return (
    <div>
      {event && eventHashTags
        ? (
          <>
            <ArticleContainer>
              <div><img src={event.imgUrl} alt="article-img" /></div>
              <div>
                <h1>{event.title}</h1>
                <h3>일시</h3>
                <p>{event.date}</p>
                <h3>주최</h3>
                <p>{event.host}</p>
              </div>
            </ArticleContainer>
            <hr />
            <ContentContainer>
              {event.content}
              <div>
                <hr />
                <p>무료</p>
                <a href={event.homepageAddress}>{event.homepageAddress}</a>
                <hr />
                주최자 연락처
                <p>{event.hostEmail}</p>
                <p>{event.hostContact}</p>
              </div>
            </ContentContainer>
            <ul>
              {eventHashTags.map((hashTag) => (
                <li key={hashTag}>
                  #
                  {hashTag}
                </li>
              ))}
            </ul>
          </>
        )
        : <p>Now Loading...</p>}
    </div>
  );
}
