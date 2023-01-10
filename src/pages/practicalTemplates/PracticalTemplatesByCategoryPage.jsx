import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import PracticalTemplates from '../../components/practicalTemplate/PracticalTemplates';
import usePraciticalTemplatesStore from '../../hooks/usePracticalTemplatesStore';

export default function PracticalTemplatesByCategoryPage() {
  const location = useLocation();
  const categoryId = location.state.id;
  const practicalTemplatesStore = usePraciticalTemplatesStore();
  const navigate = useNavigate();

  useEffect(() => {
    practicalTemplatesStore.fetchPracticalTemplatesByCategory(categoryId);
  }, []);

  const handleChangeAnswer = (event, practicalTemplateId) => {
    practicalTemplatesStore.changeAnswer(event.target.value, practicalTemplateId);
  };

  const handleClickNavigateToCategory = () => {
    navigate('/practicalTemplates');
  };

  const { practicalTemplates } = practicalTemplatesStore;

  return (
    <PracticalTemplates
      practicalTemplates={practicalTemplates}
      handleChangeAnswer={handleChangeAnswer}
      handleClickNavigateToCategory={handleClickNavigateToCategory}
    />
  );
}
