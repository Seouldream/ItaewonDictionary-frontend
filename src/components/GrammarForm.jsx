import useGrammarAdminFormStore from '../hooks/useGrammarAdminFormStore';

export default function GrammarForm({
  introduction, content, onChangeIntroduction, onChangeContent,
  handleClickCreateGrammar,
}) {

  return (
    <>
      <label htmlFor="textarea-introduction">그래마 소개 및 안내 글을 등록해주세요.</label>
      <textarea
        id="textarea-introduction"
        value={introduction}
        onChange={onChangeIntroduction}
      />
    </>
  );
}
