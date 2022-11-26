import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import useEventsStore from '../../hooks/useEventsStore';

const ArticleContainer = styled.article`
  display: flex;
`;

const ContentContainer = styled.div`
  display: flex;
`;

export default function EventDetail() {
  const eventsStore = useEventsStore();

  const location = useLocation();

  const { id } = location.state;

  useEffect(() => {
    eventsStore.fetchEvent(id);
  }, []);

  const { event } = eventsStore;

  const { hashTags } = event;

  return (
    <div>
      {event && hashTags
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
              {hashTags.map((hashTag) => (
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
