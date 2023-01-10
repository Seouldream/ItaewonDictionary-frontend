import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Input from '../../components/common/Input';
import useBasicTemplatesAdminFormStore from '../../hooks/useBasicTemplatesAdminFormStore';

const Wrapper = styled.div`
  padding-inline: calc((100% - 1200px) / 2);
`;

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 3fr 1fr 1fr;
  
  div {
    display: grid;
    grid-template-columns: 8em 1fr;  
    text-align: left;
    align-items: center;

    input {
      width:50%;
      margin-top: 0.8em;
      height: 4em;
    }
  }
`;

const ButtonBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 8em;

  div {
    width: 50%;
    grid-column: 2 / 3;
    display: flex;
    justify-content: center;
  }
`;

const EditTextArea = styled.textarea`
margin-top: 0.8em;
width: 50%;
padding: 1.5em;
height: 15em;
resize: none;
border: 1px solid ${(props) => (props.error ? props.theme.colors.red : props.theme.colors.border)};
color: ${((props) => props.theme.text.gray)};
& + & {
  margin-top: 16px;
}

:focus {
  outline: none;
  border: 1px solid ${(props) => (props.error ? props.theme.colors.red : props.theme.colors.primary)};
}
`;

const AdminButton = styled.button`
  border-radius: 1em;
  background-color :#00C641;
  color:white;
  padding: 1em;
  border-style: none;
  border-radius: 1em;
  width:7em;
  margin: 1em;
`;

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
    <Wrapper>
      <h1>1분 완성 템플릿 작성하기</h1>
      <form onSubmit={handleSubmitBasicTemplateForm}>
        <Container>
          <div>
            <label htmlFor="input-title">제목</label>
            <Input
              id="input-title"
              name="title"
              value={basicTemplateForm.title}
              onChange={(e) => basicTemplatesAdminFormStore.changeTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="input-englishSentence">영어문장</label>
            <Input
              id="input-englishSentence"
              name="englishSentence"
              value={basicTemplateForm.englishSentence}
              onChange={(e) => basicTemplatesAdminFormStore.changeEnglishSentence(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="input-koreanSentence">한글문장</label>
            <Input
              id="input-koreanSentence"
              name="koreanSentence"
              value={basicTemplateForm.koreanSentence}
              onChange={(e) => basicTemplatesAdminFormStore.changeKoreanSentence(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="input-description">상황설명</label>
            <EditTextArea
              id="input-description"
              name="description"
              value={basicTemplateForm.description}
              onChange={(e) => basicTemplatesAdminFormStore.changeDescription(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="input-youtubeUrl">예시 유튜브 링크</label>
            <Input
              id="input-youtubeUrl"
              name="youtubeUrl"
              value={basicTemplateForm.youtubeUrl}
              onChange={(e) => basicTemplatesAdminFormStore.changeYoutubeUrl(e.target.value)}
            />
          </div>
          <ButtonBox>
            <div>
              <AdminButton type="submit">
                등록
              </AdminButton>
              <AdminButton
                type="button"
                onClick={handleClickNavigateToPreviousPage}
              >
                취소
              </AdminButton>
            </div>
          </ButtonBox>
        </Container>
      </form>
    </Wrapper>
  );
}
