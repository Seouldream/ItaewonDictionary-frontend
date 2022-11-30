import ConfirmDeleteModalButton from '../ConfirmDeleteModalButton';
import BasicTemplateEditForm from './BasicTemplateEditForm';

export default function BasicTemplateAdmin({
  basicTemplate,
  index,
  isOpen,
  basicTemplateForm,
  handleChangeTitle,
  handleChangeEnglishSentence,
  handleChangeKoreanSentence,
  handleChangeDescription,
  handleChangeYoutubeUrl,
  handleClickOpenBasicTemplateUpdateForm,
  handleClickCancelUpdate,
  handleClickDeleteBasicTemplate,
  handleClickConfirmUpdate,
}) {
  const handleClickUpdate = () => {
    handleClickOpenBasicTemplateUpdateForm(basicTemplate.id, index);
  };

  const handleClickDelete = () => {
    handleClickDeleteBasicTemplate(basicTemplate.id, index);
  };

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
          <div>
            → 너무 쉽나요? 하지만 이러한 인삿말도 외국인 친구를 보면 자연스럽게 나오기 어려워요
            아래 예시를 보면서 최대한 발음과 상황을 따라해보려고 해보세요!
          </div>
        ) : null}
      </details>
      <br />
      {!isOpen[index]
      && <button type="button" onClick={handleClickUpdate}>수정하기</button>}
      <BasicTemplateEditForm
        isOpen={isOpen[index]}
        basicTemplateForm={basicTemplateForm}
        handleChangeTitle={handleChangeTitle}
        handleChangeEnglishSentence={handleChangeEnglishSentence}
        handleChangeKoreanSentence={handleChangeKoreanSentence}
        handleChangeDescription={handleChangeDescription}
        handleChangeYoutubeUrl={handleChangeYoutubeUrl}
        handleClickConfirmUpdate={handleClickConfirmUpdate}
        handleClickCancelUpdate={handleClickCancelUpdate}
      />
      <ConfirmDeleteModalButton
        onClickDelete={handleClickDelete}
      />
    </li>
  );
}
