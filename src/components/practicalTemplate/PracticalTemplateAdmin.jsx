/* eslint-disable jsx-a11y/media-has-caption */
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import usePracticalTemplatesAdminFormStore from '../../hooks/usePracticalTemplatesAdminFormStore';
import ConfirmDeleteModalButton from '../ConfirmDeleteModalButton';
import UpdatePracticalTemplateAdmin from './UpdatePracticalTemplateAdmin';

const PageButton = styled.button`
  background: #00C641;
  padding: 1em;
  border: none;
  display: flex;
  align-items: center;
  border-radius: 1em;
  color:white;
  margin: 1em 0.5em;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
`;

export default function PracticalTemplateAdmin({
  practicalTemplate, isOpen, setIsOpen,
  practicalTemplateForm,
  handleChangeCategory,
  handleChangeTitle,
  handleChangeDescription,
  handleChangeKoreanSentence,
  handleChangeBestPractice,
  handleClickEdit,
  handleClickCancel,
  handleClickNavigateToCategory,
  category,
}) {
  const practicalTemplatesAdminFormStore = usePracticalTemplatesAdminFormStore();

  const navigate = useNavigate();

  const handleClickOpen = () => {
    setIsOpen(true);
    practicalTemplatesAdminFormStore.fetchTemplateContents(category.name, practicalTemplate);
  };

  const handleClickDelete = () => {
    practicalTemplatesAdminFormStore.deletePracticalTemplate(practicalTemplate.id);
    navigate('/practicalTemplates/admin');
  };

  if (isOpen) {
    return (
      <UpdatePracticalTemplateAdmin
        setIsOpen={setIsOpen}
        practicalTemplate={practicalTemplate}
        practicalTemplateForm={practicalTemplateForm}
        handleChangeCategory={handleChangeCategory}
        handleChangeTitle={handleChangeTitle}
        handleChangeDescription={handleChangeDescription}
        handleChangeKoreanSentence={handleChangeKoreanSentence}
        handleChangeBestPractice={handleChangeBestPractice}
        handleClickEdit={handleClickEdit}
        handleClickCancel={handleClickCancel}
        category={category}
      />
    );
  }

  return (
    <article>
      <h1>{practicalTemplate.title}</h1>
      <h2>
        {practicalTemplate.description}
        :
      </h2>
      <p>{practicalTemplate.koreanSentence}</p>
      <label htmlFor="input-answer">예상답안</label>
      <input
        id="input-answer"
        disabled
      />
      <details>
        <summary>베스트 프렉티스 보기</summary>
        <p><strong>Best Practice</strong></p>
        <p>{practicalTemplate.bestPractice}</p>
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
      <ButtonBox>
        <PageButton
          type="button"
          onClick={handleClickOpen}
        >
          수정하기
        </PageButton>
        <ConfirmDeleteModalButton
          onClickDelete={handleClickDelete}
        />
        <PageButton
          type="button"
          onClick={handleClickNavigateToCategory}
        >
          카테고리로 돌아가기
        </PageButton>
      </ButtonBox>
      <hr />
    </article>
  );
}
