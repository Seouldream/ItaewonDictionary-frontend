import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Input from '../../components/common/Input';
import useSpeakPracticesStore from '../../hooks/useSpeakPracticesStore';

const Wrapper = styled.div`
  padding-inline: calc((100% - 1200px) / 2);
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 2fr 2fr 2fr 1fr 1fr;

  label {
    margin-top: 1em;
  }
  
  div {
    display: flex;
    flex-direction: column;
    text-align: left;
    align-items: left;
    height: fit-content;
    input {
      width:50%;
      margin-top: 0.8em;
      height: 4em;
    }
  }
  div:nth-child(6) {
        display: flex;
        flex-direction: row;
}

`;

const EditTextArea = styled.textarea`
margin-top: 0.8em;
width: 50%;
padding: 1.5em;
height: 11em;
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

export default function SpeakPracticeFormPage() {
  const speakPracticesStore = useSpeakPracticesStore();

  const navigate = useNavigate();

  const formData = new FormData();

  const accessInformation = JSON.parse(localStorage.getItem('accessInformation'));

  const { accessToken } = accessInformation;

  const { practiceForm } = speakPracticesStore;

  const { record } = speakPracticesStore;

  const handleChangeRecord = (e) => {
    const recordFile = e.target.files[0];

    formData.append('multipartFile', recordFile);

    speakPracticesStore.changeRecord(formData);
  };

  const handleSubmitSpeakPracticeForm = async (event) => {
    event.preventDefault();

    if (practiceForm.title === '' || practiceForm.situation === '' || practiceForm.englishScript === ''
     || practiceForm.koreanScript === ''
    || record === '') {
      return;
    }

    await speakPracticesStore.createPractice(accessToken);
    speakPracticesStore.clearPracticeTemplate();

    navigate('/speak');
  };

  const handleClickNavigateToPreviousPage = () => {
    navigate(-1);
  };

  if (!accessToken) {
    navigate('/login');
  }

  return (
    <Wrapper>
      <h1>말하고 첨삭받기</h1>
      <form onSubmit={handleSubmitSpeakPracticeForm}>
        <Container>
          <div>
            <label htmlFor="input-title">제목</label>
            <Input
              id="input-title"
              name="title"
              value={practiceForm.title}
              onChange={(e) => speakPracticesStore.changeTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="input-situation">상황설명</label>
            <EditTextArea
              id="input-situation"
              name="situation"
              value={practiceForm.situation}
              onChange={(e) => speakPracticesStore.changeSituation(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="input-englishScript">영어로 써보기</label>
            <EditTextArea
              id="input-englishScript"
              name="englishScript"
              value={practiceForm.englishScript}
              onChange={(e) => speakPracticesStore.changeEnglishScript(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="input-koreanScript">한글로 상황설명 해보기</label>
            <EditTextArea
              id="input-koreanScript"
              name="koreanScript"
              value={practiceForm.koreanScript}
              onChange={(e) => speakPracticesStore.changeKoreanScript(e.target.value)}
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
            <AdminButton type="submit">
              등록
            </AdminButton>
            <AdminButton
              type="button"
              onClick={handleClickNavigateToPreviousPage}
            >
              취소
            </AdminButton>
          </ButtonBox>
        </Container>
      </form>
    </Wrapper>
  );
}
