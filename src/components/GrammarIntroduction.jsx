export default function GrammarIntroduction({
  introduction, onChangeIntroduction,
}) {
  const handleChangeIntroduction = (e) => {
    onChangeIntroduction(e);
  };

  return (
    <div>
      <label
        htmlFor="input-introduction"
      >
        수정하기
      </label>
      <textarea
        id="input-introduction"
        htmlFor="input-introduction"
        name=""
        value={introduction}
        onChange={handleChangeIntroduction}
      />
    </div>

  );
}
