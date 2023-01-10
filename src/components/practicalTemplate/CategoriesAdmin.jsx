import { useState } from 'react';
import styled from 'styled-components';
import Category from './Category';
import CategoryCheckBox from './CategoryCheckBox';
import usePracticalTemplatesAdminFormStore from '../../hooks/usePracticalTemplatesAdminFormStore';
import ConfirmDeleteModalButton from '../ConfirmDeleteModalButton';

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  justify-items: center;
  padding: 0;

`;

const AdminButton = styled.button`
  border-radius: 1em;
  background-color :#00C641;
  color:white;
  padding: 1em;
  border-style: none;
  margin: 1em 0.5em;
`;

export default function CategoriesAdmin({
  categories, navigateToCategoryDetails, handleFetchCategories,
}) {
  const [isOpen, setOpen] = useState(true);

  const practicalTemplatesAdminFormStore = usePracticalTemplatesAdminFormStore();

  const deleteMessage = '카테고리를 삭제하시면 해당 카테고리의 템플릿도 모두 삭제됩니다. 정말로 삭제하시겠어요?';

  const handleClickCheck = (id) => {
    practicalTemplatesAdminFormStore.isChecked(id);
  };

  const handleClickDelete = async () => {
    await practicalTemplatesAdminFormStore.deleteCategories();
    await handleFetchCategories();
    setOpen(true);
  };

  if (!isOpen) {
    return (
      <div>
        <AdminButton
          type="button"
          onClick={() => setOpen(true)}
        >
          취소
        </AdminButton>
        <ConfirmDeleteModalButton
          onClickDelete={handleClickDelete}
          message={deleteMessage}
        />
        <ol>
          {categories.map((category) => (
            <CategoryCheckBox
              key={category.id}
              category={category}
              handleClickCheck={handleClickCheck}
            />
          ))}
        </ol>
      </div>
    );
  }

  return (
    <div>
      {isOpen
    && (
      <>
        <AdminButton
          type="button"
          onClick={() => setOpen(false)}
        >
          카테고리 관리하기
        </AdminButton>
        <List>
          {categories.map((category) => (
            <Category
              key={category.id}
              category={category}
              navigateToCategoryDetails={navigateToCategoryDetails}
            />
          ))}
        </List>
      </>
    )}
    </div>
  );
}
