import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import useGrammarStore from '../../hooks/useGrammarStore';

export default function GrammarPage() {
  const grammarStore = useGrammarStore();

  const { grammar } = grammarStore;

  useEffect(() => {
    grammarStore.fetchGrammar();
  }, []);

  function convertToHtml(element) {
    return <div dangerouslySetInnerHTML={{ __html: element }} />;
  }

  const convertedContent = convertToHtml(grammar.content);

  if (!grammar.id) {
    return <p>화면을 로딩중입니다. 조금만 기다려주세요!</p>;
  }

  return (
    <>
      <h1>스텝1! 이태원에서 바로 먹히는 영어 회화 실전 문법!</h1>
      <p>{grammar.introduction}</p>
      {convertedContent}
      {grammarStore.isNoGrammar ? (
        <div>{grammarStore.errorMessage}</div>
      ) : null}
      <h2>실전 문법을 완료했다면?</h2>
      <p>
        <Link
          to="/basicTemplates"
        >
          두번째 스텝! 이태원에서 바로먹히는 1분 완성 템플릿 배우러가기
        </Link>
      </p>
    </>
  );
}
