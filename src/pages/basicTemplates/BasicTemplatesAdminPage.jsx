import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import BasicTemplatesAdmin from '../../components/basicTemplate/BasicTemplatesAdmin';
import useBasicTemplatesAdminFormStore from '../../hooks/useBasicTemplatesAdminFormStore';

const Container = styled.div`
  padding-inline: calc((100% - 1200px) / 2);
`;

const AdminButton = styled.button`
  border-radius: 1em;
  background-color :#00C641;
  color:white;
  padding: 1em;
  border-style: none;
  margin: 1em 0.5em;
`;

const TipBox = styled.div`
  border-bottom: solid 1px #D9D9D9;  
  padding-block: 0 2em;
`;

const Tip = styled.div`
  background-color: #ECF7EE;
  width:fit-content;
  padding: 0.6em;
  border-radius: 0.2em;
  word-break: keep-all;
  line-height: 1.5em;
`;

export default function BasicTemplatesAdminPage() {
  const navigagte = useNavigate();

  const basicTemplatesAdminFormStore = useBasicTemplatesAdminFormStore();

  const { basicTemplateForm } = basicTemplatesAdminFormStore;

  const { basicTemplates } = basicTemplatesAdminFormStore;

  useEffect(() => {
    basicTemplatesAdminFormStore.fetchBasicTemplates();
  }, []);

  const handleClickNavigateToPracticalTemplates = () => {
    navigagte('/practicalTemplates');
  };

  const handleClickNavigateToBasicTemplateFromPage = () => {
    basicTemplatesAdminFormStore.clearTextArea();
    navigagte('/basicTemplates/admin/new');
  };

  const initialSetting = Array(basicTemplates.length).fill(false);

  const [isOpen, toggle] = useState(initialSetting);

  const handleChangeTitle = (e) => {
    basicTemplatesAdminFormStore.changeTitle(e.target.value);
  };

  const handleChangeEnglishSentence = (e) => {
    basicTemplatesAdminFormStore.changeEnglishSentence(e.target.value);
  };

  const handleChangeKoreanSentence = (e) => {
    basicTemplatesAdminFormStore.changeKoreanSentence(e.target.value);
  };

  const handleChangeDescription = (e) => {
    basicTemplatesAdminFormStore.changeDescription(e.target.value);
  };

  const handleChangeYoutubeUrl = (e) => {
    basicTemplatesAdminFormStore.changeYoutubeUrl(e.target.value);
  };

  const handleClickOpenBasicTemplateUpdateForm = (id, index) => {
    basicTemplatesAdminFormStore.fetchBasicTemplate(id);

    const open = initialSetting.map((button, idx) => {
      if (index === idx) {
        return true;
      }
      return false;
    });
    toggle(open);
  };

  const handleClickConfirmUpdate = async (id) => {
    const updatedBasicForm = {
      title: basicTemplateForm.title,
      englishSentence: basicTemplateForm.englishSentence,
      koreanSentence: basicTemplateForm.koreanSentence,
      description: basicTemplateForm.description,
      youtubeUrl: basicTemplateForm.youtubeUrl,
    };
    await basicTemplatesAdminFormStore.updateBasicTemplate(id, updatedBasicForm);
    basicTemplatesAdminFormStore.fetchBasicTemplates();
    toggle(initialSetting);
  };

  const handleClickCancelUpdate = () => {
    toggle(initialSetting);
  };

  const handleClickDeleteBasicTemplate = async (id) => {
    await basicTemplatesAdminFormStore.deleteBasicTemplate(id);
    basicTemplatesAdminFormStore.fetchBasicTemplates();
  };

  if (basicTemplates.length === 0) {
    return (
      <>
        <p>쪼매마 기다리소</p>
        <Link to="/basicTemplates/admin/new">첫 템플릿 등록하러 가기</Link>
      </>
    );
  }

  return (
    <Container>
      <h1>두번째 스텝 이태원에서 바로 먹히는 1분 완성 템플릿</h1>
      <p>일상 회화에서 자주 쓰는 표현들로만 모아보았어요!</p>
      <p>다음을 발음해보고 따라하면서 익혀보아요!</p>
      <BasicTemplatesAdmin
        isOpen={isOpen}
        basicTemplates={basicTemplates}
        basicTemplateForm={basicTemplateForm}
        handleChangeTitle={handleChangeTitle}
        handleChangeEnglishSentence={handleChangeEnglishSentence}
        handleChangeKoreanSentence={handleChangeKoreanSentence}
        handleChangeDescription={handleChangeDescription}
        handleChangeYoutubeUrl={handleChangeYoutubeUrl}
        handleClickOpenBasicTemplateUpdateForm={handleClickOpenBasicTemplateUpdateForm}
        handleClickCancelUpdate={handleClickCancelUpdate}
        handleClickConfirmUpdate={handleClickConfirmUpdate}
        handleClickDeleteBasicTemplate={handleClickDeleteBasicTemplate}
      />
      <TipBox>
        <Tip>
          <strong>💡 Tip!</strong>
          <br />
          정말로 그 상황속에 처한 듯 연기를 하시면 실력이 확연히 늘어요!
          꼭 내가 그 상황에 있다고 가정하고 스스로의 발음이 어색하고 오글거리더라도 더욱 연기하는 것 처럼 과장되게 해주세요.
          상대방이 어느나라에서 어떤 성별과 성격을 가졌을지 상상하면 더욱 좋아요!
        </Tip>
      </TipBox>
      <p>기초 템플릿을 다 보았다면?</p>
      <AdminButton
        type="button"
        onClick={handleClickNavigateToPracticalTemplates}
      >
        실전 템플릿으로 바로가기!
      </AdminButton>
      <hr />
      <AdminButton
        type="button"
        onClick={handleClickNavigateToBasicTemplateFromPage}
      >
        템플릿 추가하기
      </AdminButton>
    </Container>
  );
}
