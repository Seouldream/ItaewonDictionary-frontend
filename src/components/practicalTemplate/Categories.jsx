import { useLocation, useSearchParams } from 'react-router-dom';
import styled from 'styled-components';
import Pagination from '../Pagination';
import Category from './Category';

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  justify-items: center;
  padding: 0;

`;

export default function Categories({
  categories, navigateToCategoryDetails, totalPages,
}) {
  const location = useLocation();

  const [searchParams] = useSearchParams();

  return (
    <>
      <List>
        {categories.map((category) => (
          <Category
            key={category.id}
            category={category}
            navigateToCategoryDetails={navigateToCategoryDetails}
          />
        ))}
      </List>
      <Pagination
        url={location.pathname}
        total={totalPages}
        current={searchParams.get('page') ?? 1}
      />
    </>
  );
}
