import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PracticalTemplatesAdmin from '../../components/practicalTemplate/PracticalTemplatesAdmin';
import usePracticalTemplatesAdminFormStore from '../../hooks/usePracticalTemplatesAdminFormStore';
import usePraciticalTemplatesStore from '../../hooks/usePracticalTemplatesStore';

export default function PracticalTemplatesByCategoryAdminPage() {
  const location = useLocation();
  const practicalTemplatesStore = usePraciticalTemplatesStore();
  const practicalTemplatesAdminFormStore = usePracticalTemplatesAdminFormStore();
  const categoryId = location.state.id;

  const [isOpen, setIsOpen] = useState(false);

  const { practicalTemplateForm } = practicalTemplatesAdminFormStore;

  const navigate = useNavigate();

  useEffect(() => {
    practicalTemplatesStore.fetchPracticalTemplatesByCategory(categoryId);
    practicalTemplatesStore.fetchCategory(categoryId);
  }, []);

  const { category } = practicalTemplatesStore;

  const handleChangeCategory = (e) => {
    practicalTemplatesAdminFormStore.changeCategory(e.target.value);
  };

  const handleChangeTitle = (e) => {
    practicalTemplatesAdminFormStore.changeTitle(e.target.value);
  };

  const handleChangeDescription = (e) => {
    practicalTemplatesAdminFormStore.changeDescription(e.target.value);
  };

  const handleChangeKoreanSentence = (e) => {
    practicalTemplatesAdminFormStore.changeKoreanSentence(e.target.value);
  };

  const handleChangeBestPractice = (e) => {
    practicalTemplatesAdminFormStore.changeBestPractice(e.target.value);
  };

  const handleClickConfirmEdit = (element) => {
    practicalTemplatesAdminFormStore.updatePracticalTemplate(
      element.id,
      practicalTemplateForm,
    );
    practicalTemplatesStore.fetchPracticalTemplatesByCategory(categoryId);
    setIsOpen(false);
    navigate('/practicalTemplates/admin');
  };

  const handleClickCancel = () => {
    practicalTemplatesAdminFormStore.clearPracticalTemplate();
    setIsOpen(false);
  };

  const handleClickNavigateToCategory = () => {
    navigate('/practicalTemplates/admin');
  };

  const { practicalTemplates } = practicalTemplatesStore;

  return (
    <PracticalTemplatesAdmin
      practicalTemplates={practicalTemplates}
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      practicalTemplateForm={practicalTemplateForm}
      handleChangeCategory={handleChangeCategory}
      handleChangeTitle={handleChangeTitle}
      handleChangeDescription={handleChangeDescription}
      handleChangeKoreanSentence={handleChangeKoreanSentence}
      handleChangeBestPractice={handleChangeBestPractice}
      handleClickEdit={handleClickConfirmEdit}
      handleClickCancel={handleClickCancel}
      handleClickNavigateToCategory={handleClickNavigateToCategory}
      category={category}
      categoryId={categoryId}
    />
  );
}
