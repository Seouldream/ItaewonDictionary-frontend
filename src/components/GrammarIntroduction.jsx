export default function GrammarIntroduction({
  isOpen, introduction, onChangeIntroduction,
}) {

  const handleChangeIntroduction = () => {
    onChangeIntroduction();
  };
  
  return (
    <div>
      <label
        htmlFor="input-introduction"
      >
        인트로 수정하기
      </label>
      <input
        id="input-introduction"
        htmlFor="input-introduction"
        name=""
        value={grammarFormStore.introduction}
        // onChange={(e) => grammarFormStore.changeIntroduction(e.target.value)}
      />
    </div>

  );
}
