export default function GrammarIntroduction({
  isOpen, introduction, onChangeIntroduction,
}) {

  const grammarFormStore = useGr
  const handleChangeIntroduction = () => {
    onChangeIntroduction();
  };

  return (
    <div>
      <label
        htmlFor="input-introduction"
      >
        수정하기
      </label>
      <input
        id="input-introduction"
        htmlFor="input-introduction"
        name=""
        value={introduction}
        onChange={(e) => grammarFormStore.changeIntroduction(e.target.value)}
      />
    </div>

  );
}
