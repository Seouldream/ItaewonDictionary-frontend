/* eslint-disable jsx-a11y/media-has-caption */
import styled from 'styled-components';
import usePraciticalTemplatesStore from '../../hooks/usePracticalTemplatesStore';
import Input from '../common/Input';

const Container = styled.article`
  padding-inline: calc((100% - 1200px) / 2);

  label {
    margin-bottom: 1em;
  }

  input {
    width: 70%;
  }

  div {
    display: flex;
    flex-direction: column;

  }
`;

const Sentence = styled.p`
  background-color:  #ECF7EE;
  width:fit-content;
  padding: 0.4em;
`;

const PageButton = styled.button`
  background: #00C641;
  color:white;
  padding: 1em;
  border: none;
  border-radius: 1em;
  a {
  display: flex;
  align-items: center;
  }
  
`;

const Summary = styled.summary`
  font-size: 1.2em;
  padding-block: 0.5em;
`;

export default function PracticalTemplate({
  practicalTemplate, handleChangeAnswer, handleClickNavigateToCategory,
}) {
  const practicalTemplatesStore = usePraciticalTemplatesStore();

  const foundAnswer = practicalTemplatesStore.practicalTemplates.find((element) => (
    element.id === practicalTemplate.id)).answer;

  return (
    <Container>
      <h1>
        제목:
        {' '}
        {practicalTemplate.title}
      </h1>
      <h2>
        상황
        :
        {' '}
        {practicalTemplate.description}
      </h2>
      <Sentence>
        한글해석:
        {' '}
        {practicalTemplate.koreanSentence}

      </Sentence>
      <div>
        <label htmlFor="input-answer">예상답안</label>
        <Input
          id="input-answer"
          value={foundAnswer}
          onChange={(e) => handleChangeAnswer(e, practicalTemplate.id)}
        />
      </div>
      <details>
        <Summary>베스트 프렉티스 보기</Summary>
        <p><strong>Best Practice</strong></p>
        <Sentence>
          {practicalTemplate.bestPractice}
        </Sentence>
        {/* <p>{practicalTemplate.record}</p> */}
        <figure>
          <figcaption />
          <audio
            controls
            src={practicalTemplate.recordUrl}
          >
            <a href={practicalTemplate.recordUrl}>
              Download audio
            </a>
          </audio>
        </figure>
      </details>
      <PageButton
        type="button"
        onClick={handleClickNavigateToCategory}
      >
        카테고리로 돌아가기
      </PageButton>
      <hr />
    </Container>
  );
}
