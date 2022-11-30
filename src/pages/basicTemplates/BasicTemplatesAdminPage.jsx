import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BasicTemplatesAdmin from '../../components/basicTemplate/BasicTemplatesAdmin';
import useBasicTemplatesAdminFormStore from '../../hooks/useBasicTemplatesAdminFormStore';
import useBasicTemplatesStore from '../../hooks/useBasicTemplatesStore';

export default function BasicTemplatesAdminPage() {
  const navigagte = useNavigate();

  const basicTemplatesStore = useBasicTemplatesStore();

  const basicTemplatesAdminFormStore = useBasicTemplatesAdminFormStore();

  const { basicTemplateForm } = basicTemplatesAdminFormStore;

  const { basicTemplates } = basicTemplatesStore;

  const handleClickNavigateToPracticalTemplates = () => {
    navigagte('/practicalTemplates');
  };

  const handleClickNavigateToBasicTemplateFromPage = () => {
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

    const isOpens = initialSetting.map((button, idx) => {
      if (index === idx) {
        return true;
      }
      return false;
    });
    toggle(isOpens);
  };

  const handleClickConfirmUpdate = () => {
    basicTemplatesAdminFormStore.updateBasicTemplate(basicTemplateForm);
  };

  const handleClickCancelUpdate = () => {
    toggle(initialSetting);
  };

  const handleClickDeleteBasicTemplate = (id) => {
    basicTemplatesAdminFormStore.deleteBasicTemplate(id);
  };

  return (
    <>
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
      <div>
        Tip! 정말로 그 상황속에 처한 듯 연기를 하시면 실력이 확연히 늘어요!
        꼭 내가 그 상황에 있다고 가정하고 스스로의 발음이 어색하고 오글거리더라도 더욱 연기하는 것 처럼 과장되게 해주세요.
        상대방이 어느나라에서 어떤 성별과 성격을 가졌을지 상상하면 더욱 좋아요!
      </div>
      <p>기초 템플릿을 다 보았다면?</p>
      <button
        type="button"
        onClick={handleClickNavigateToPracticalTemplates}
      >
        실전 템플릿으로 바로가기!
      </button>
      <hr />
      <button
        type="button"
        onClick={handleClickNavigateToBasicTemplateFromPage}
      >
        템플릿 추가하기
      </button>
    </>
  );
}
