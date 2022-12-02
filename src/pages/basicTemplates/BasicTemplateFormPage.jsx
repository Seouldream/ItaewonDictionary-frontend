import { useNavigate } from 'react-router-dom';
import useBasicTemplatesAdminFormStore from '../../hooks/useBasicTemplatesAdminFormStore';

export default function BasicTemplateFormPage() {
  const basicTemplatesAdminFormStore = useBasicTemplatesAdminFormStore();

  const { basicTemplateForm } = basicTemplatesAdminFormStore;

  const navigate = useNavigate();

  const handleSubmitBasicTemplateForm = (event) => {
    // ToDo 1. 빈칸 입력시 생성 안하도록 프론트 예외 처리 필요
    // ToDo 2. youtube Url 지정양식으로만 입력할수 있도록 예외 처리 필요
    basicTemplatesAdminFormStore.createBasicTemplate(basicTemplateForm);
    navigate('/basicTemplates/admin');
    event.preventDefault();
  };

  const handleClickNavigateToPreviousPage = () => {
    navigate(-1);
  };

  return (
    <>
      <h1>1분 완성 템플릿 작성하기</h1>
      <form onSubmit={handleSubmitBasicTemplateForm}>
        <div>
          <label htmlFor="input-title">제목</label>
          <input
            id="input-title"
            name="title"
            value={basicTemplateForm.title}
            onChange={(e) => basicTemplatesAdminFormStore.changeTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="input-englishSentence">영어문장</label>
          <input
            id="input-englishSentence"
            name="englishSentence"
            value={basicTemplateForm.englishSentence}
            onChange={(e) => basicTemplatesAdminFormStore.changeEnglishSentence(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="input-koreanSentence">한글문장</label>
          <input
            id="input-koreanSentence"
            name="koreanSentence"
            value={basicTemplateForm.koreanSentence}
            onChange={(e) => basicTemplatesAdminFormStore.changeKoreanSentence(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="input-description">상황설명</label>
          <input
            id="input-description"
            name="description"
            value={basicTemplateForm.description}
            onChange={(e) => basicTemplatesAdminFormStore.changeDescription(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="input-youtubeUrl">예시 유튜브 링크</label>
          <input
            id="input-youtubeUrl"
            name="youtubeUrl"
            value={basicTemplateForm.youtubeUrl}
            onChange={(e) => basicTemplatesAdminFormStore.changeYoutubeUrl(e.target.value)}
          />
        </div>
        <button type="submit">
          등록
        </button>
        <button
          type="button"
          onClick={handleClickNavigateToPreviousPage}
        >
          취소
        </button>
      </form>
    </>
  );
}
