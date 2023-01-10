/* eslint-disable max-len */
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';
import usePraciticalTemplatesStore from '../../hooks/usePracticalTemplatesStore';
import usePracticalTemplatesAdminFormStore from '../../hooks/usePracticalTemplatesAdminFormStore';
import Input from '../../components/common/Input';

const Wrapper = styled.div`
  padding-inline: calc((100% - 1200px) / 2);
`;

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr 1fr 3fr 1fr 1fr 1fr;
  
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

const Select = styled.select`
  width: 57.5%;
  height: 50%;
`;

export default function PracticalTemplateFormPage() {
  const practicalTemplatesAdminFormStore = usePracticalTemplatesAdminFormStore();
  const practicalTemplatesStore = usePraciticalTemplatesStore();

  const { practicalTemplateForm } = practicalTemplatesAdminFormStore;

  const { categoryName } = practicalTemplatesAdminFormStore;

  const navigate = useNavigate();

  const [active, activate] = useState(false);

  const formData = new FormData();

  const { practicalTemplateCategories } = practicalTemplatesStore;

  const handleClickSelect = (e) => {
    if (e.target.value === 'new-category') {
      activate(false);
    }

    if (e.target.value !== 'new-category') {
      activate(true);
      practicalTemplatesAdminFormStore.changeCategory(e.target.value);
    }
  };

  const handleChangeRecord = (e) => {
    const record = e.target.files[0];

    formData.append('multipartFile', record);

    practicalTemplatesAdminFormStore.changeRecord(formData);
  };

  const handleSubmitPracticalTemplateForm = async (event) => {
    // ToDo 1. 빈칸 입력시 생성 안하도록 프론트 예외 처리 필요
    // ToDo 2. youtube Url 지정양식으로만 입력할수 있도록 예외 처리 필요
    event.preventDefault();
    await practicalTemplatesAdminFormStore.createPracticalTemplate(practicalTemplateForm);
    practicalTemplatesAdminFormStore.clearPracticalTemplate();

    navigate('/practicalTemplates/admin');
  };

  const handleClickNavigateToPreviousPage = () => {
    navigate(-1);
  };

  return (
    <Wrapper>
      <h1>실전 템플릿 작성하기</h1>
      <form onSubmit={handleSubmitPracticalTemplateForm}>
        <Container>
          <label
            htmlFor="category"
            hidden
          >
            카테고리 선택

          </label>
          <Select
            id="category"
            onChange={handleClickSelect}
          >
            <option
              value="new-category"
            >
              새카테고리
            </option>
            {practicalTemplateCategories.map((category) => (
              <option
                key={category.id}
                value={category.name}
              >
                {category.name}
              </option>
            ))}
          </Select>
          <div>
            <label htmlFor="input-category">새 카테고리</label>
            <Input
              id="input-category"
              name="category"
              value={categoryName}
              disabled={active}
              onChange={(e) => practicalTemplatesAdminFormStore.changeCategory(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="input-title">제목</label>
            <Input
              id="input-title"
              name="title"
              value={practicalTemplateForm.title}
              onChange={(e) => practicalTemplatesAdminFormStore.changeTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="input-description">상황설명</label>
            <EditTextArea
              id="input-description"
              name="description"
              value={practicalTemplateForm.description}
              onChange={(e) => practicalTemplatesAdminFormStore.changeDescription(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="input-koreanSentence">한글문장</label>
            <Input
              id="input-koreanSentence"
              name="koreanSentence"
              value={practicalTemplateForm.koreanSentence}
              onChange={(e) => practicalTemplatesAdminFormStore.changeKoreanSentence(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="input-bestPractice">베스트 프렉티스</label>
            <Input
              id="input-bestPractice"
              name="bestPractice"
              value={practicalTemplateForm.bestPractice}
              onChange={(e) => practicalTemplatesAdminFormStore.changeBestPractice(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="input-record">녹음파일</label>
            <Input
              id="input-record"
              type="file"
              name="record"
              accept="audio/*"
              onChange={handleChangeRecord}
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
