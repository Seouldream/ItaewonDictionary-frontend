import styled from 'styled-components';

const ContentBox = styled.li`
  
`;

const Summary = styled.summary`
padding-block: 1em;
`;

const InfoBox = styled.div`
  background-color: #FAF7EF;
  width:fit-content;
  padding: 1em;
  margin: 0;
  word-break: keep-all;
`;

const InfoMessage = styled.div`
  background-color: #FAF7EF;
  width:fit-content;
  padding: 1em;
  margin: 0;
  word-break: keep-all;
`;

export default function BasicTemplate({
  basicTemplate, index,
}) {
  return (
    <ContentBox>
      <h2>
        {index + 1}
        {'. '}
        {basicTemplate.title}
      </h2>
      {basicTemplate.englishSentence}
      <details>
        <Summary>해석 및 풀이 보기</Summary>
        <InfoBox>
          <p>
            <strong>해석:</strong>
            {' '}
            {basicTemplate.koreanSentence}
          </p>
          <span>
            <strong>풀이: </strong>
          </span>
          {basicTemplate.description}
        </InfoBox>
        <p>
          <strong>사용예제 보기</strong>
        </p>
        <iframe
          width="560"
          height="315"
          src={basicTemplate.youtubeUrl}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer;
           autoplay;
           clipboard-write;
           encrypted-media;
           gyroscope;
           picture-in-picture"
          allowFullScreen
        />
        {index === 0 ? (
          <InfoMessage>
            → 너무 쉽나요? 하지만 이러한 인삿말도 외국인 친구를 보면 자연스럽게 나오기 어려워요
            아래 예시를 보면서 최대한 발음과 상황을 따라해보려고 해보세요!
          </InfoMessage>
        ) : null}
      </details>
      <br />
    </ContentBox>
  );
}
