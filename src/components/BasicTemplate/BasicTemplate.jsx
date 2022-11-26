export default function BasicTemplate({
  basicTemplate, index,
}) {
  return (
    <li>
      <h2>
        {index + 1}
        {'. '}
        {basicTemplate.title}
      </h2>
      {basicTemplate.englishSentence}
      <details>
        <summary>해석 및 풀이 보기</summary>
        <p>{basicTemplate.koreanSentence}</p>
        <span>설명: </span>
        {basicTemplate.description}
        <p>사용예제 보기</p>
        {basicTemplate.youtubeUrl}
        {index === 0 ? (
          <div>
            → 너무 쉽나요? 하지만 이러한 인삿말도 외국인 친구를 보면 자연스럽게 나오기 어려워요
            아래 예시를 보면서 최대한 발음과 상황을 따라해보려고 해보세요!
          </div>
        ) : null}
      </details>
      <br />
    </li>
  );
}
