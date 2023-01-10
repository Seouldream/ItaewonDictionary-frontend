import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CategoriesAdmin from '../../components/practicalTemplate/CategoriesAdmin';

import usePraciticalTemplatesStore from '../../hooks/usePracticalTemplatesStore';

const AdminButton = styled.button`
  border-radius: 1em;
  background-color :#00C641;
  color:white;
  padding: 1em;
  border-style: none;
  margin: 1em 0.5em;
`;

const Container = styled.div`
  padding-inline: calc((100% - 1200px) / 2);
`;

const Header = styled.div`

padding-block: 2em 2em;
border-bottom: solid 1px #D9D9D9;

p {
  line-height: 1.8em;
}
 ;

  span {
    color :#00C641;
    font-size: 1.5em;
    font-weight: bold;
  }

p {
  background-color: #ECF7EE;
  width:fit-content;
  padding: 0.3em;
}
`;

export default function PracticalTemplatesAdminPage() {
  const navigate = useNavigate();
  const practicalTemplatesStore = usePraciticalTemplatesStore();

  const { practicalTemplateCategories } = practicalTemplatesStore;

  useEffect(() => {
    practicalTemplatesStore.fetchPracticalTemplateCategories();
  }, []);

  const navigateToCategoryDetails = (id) => {
    navigate(`/practicalTemplates/admin/categories/${id}`, { state: { id } });
  };

  const handleClickNavigateToPracticalTemplateFormPage = () => {
    navigate('/practicalTemplates/admin/new');
  };

  const handleFetchCategories = () => {
    practicalTemplatesStore.fetchPracticalTemplateCategories();
  };

  return (
    <Container>
      <Header>
        <span>STEP3</span>
        <h1>🔥 인생은 실전이야 귀염둥이야</h1>
        <p>
          <strong>
            자 벌써 실전이에요!
          </strong>
          <br />
          언어는 최대한 쉽고 간단하게 배워서 바로바로 써먹을때 실력이 가장 수직 상승한답니다.
        </p>
      </Header>
      <h3>🎙 아래 카테고리에서 상황별 영작을 해보고 영어로 말해보아요!</h3>
      <CategoriesAdmin
        categories={practicalTemplateCategories}
        navigateToCategoryDetails={navigateToCategoryDetails}
        handleFetchCategories={handleFetchCategories}
      />
      <AdminButton
        type="button"
        onClick={handleClickNavigateToPracticalTemplateFormPage}
      >
        새 실전템플릿 만들기
      </AdminButton>
    </Container>
  );
}
