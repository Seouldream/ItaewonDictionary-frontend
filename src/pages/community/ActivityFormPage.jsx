/* eslint-disable jsx-a11y/label-has-associated-control */
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Input from '../../components/common/Input';
import useCommunityStore from '../../hooks/useCommunityStore';

const Wrapper = styled.div`
  padding-inline: calc((100% - 1200px) / 2);
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
`;

const Container = styled.div`
  display: grid;
  grid-template-rows: 1fr 3fr 1fr;
  ul {
    list-style: inside;
  }

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
  div:nth-child(4) {
        display: flex;
        flex-direction: row;
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

export default function ActivityFormPage() {
  const communityStore = useCommunityStore();

  const navigate = useNavigate();

  const { activityForm } = communityStore;

  const accessInformation = JSON.parse(localStorage.getItem('accessInformation'));

  const { accessToken } = accessInformation;

  const handleChangeContent = async (event, editor) => {
    const content = editor.getData();

    await communityStore.changeContent(content);
  };

  const handleClickCreateActivity = async () => {
    await communityStore.createActivity(accessToken);

    navigate('/community');
  };

  const handleClickNavigateToPreviousPage = () => {
    navigate(-1);
  };

  return (
    <Wrapper>
      <h1>활동 만들기</h1>
      <Container>
        <div>
          <label htmlFor="input-title" />
          <Input
            id="input-title"
            name="title"
            placeholder="제목을 입력하세요"
            value={activityForm.title}
            onChange={(e) => communityStore.changeTitle(e.target.value)}
          />
        </div>
        <CKEditor
          editor={ClassicEditor}
          data={activityForm.content}
          name=""
          onChange={handleChangeContent}
        />
        <ButtonBox>
          <AdminButton
            type="submit"
            onClick={handleClickCreateActivity}
          >
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
    </Wrapper>
  );
}
