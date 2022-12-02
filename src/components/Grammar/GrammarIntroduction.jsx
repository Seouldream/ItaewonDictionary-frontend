import ConfirmEditModalButton from '../ConfirmEditModalButton';

export default function GrammarIntroduction({
  introduction, onChangeIntroduction, onClickEditIntroduction,
  handleClickCancelEditIntroduction,
}) {
  const handleChangeIntroduction = (e) => {
    onChangeIntroduction(e);
  };

  const handleClickEditIntroduction = () => {
    onClickEditIntroduction();
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
      <ConfirmEditModalButton
        onClickEdit={handleClickEditIntroduction}
        handleClickCancel={handleClickCancelEditIntroduction}
      />
    </div>
  );
}
