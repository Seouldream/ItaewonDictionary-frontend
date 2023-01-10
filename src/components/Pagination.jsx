/* eslint-disable react/prop-types */
/* eslint-disable react/no-array-index-key */

import { Link, useNavigate } from 'react-router-dom';

import styled from 'styled-components';

import usePagination from '../hooks/usePagination';

export default function Pagination({ url, total, current }) {
  const navigate = useNavigate();

  const currentPage = Number(current);
  const totalPages = Number(total);

  if (totalPages === 0) {
    return null;
  }

  const pages = usePagination({
    currentPage,
    totalPages,
  });

  const handleClickPrev = () => {
    navigate(`${url}?page=${currentPage - 1}`);
  };

  const handleClickNext = () => {
    navigate(`${url}?page=${currentPage + 1}`);
  };

  return (
    <Nav>
      <Button
        type="button"
        onClick={handleClickPrev}
        disabled={currentPage === 1}
      >
        〈
      </Button>
      <List>
        {
          pages.map((page, i) => (
            page === '...' ? (
              <Dots key={i}>
                {page}
              </Dots>
            ) : (
              <li key={i}>
                <LinkItem
                  to={`${url}?page=${page}`}
                  selected={currentPage === page}
                >
                  {page}
                </LinkItem>
              </li>
            )
          ))
        }
      </List>
      <Button
        type="button"
        onClick={handleClickNext}
        disabled={currentPage === total}
      >
        〉
      </Button>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1em;

  padding-bottom: 5em;

  font-weight: 600;
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.5em;
  padding: 0;
`;

const Dots = styled.li`
  padding: 10px;

  cursor: default;
`;

const LinkItem = styled(Link)`
  display: block;
  padding: 0.3rem 0.4rem;
  border-radius: 30%;
  
  /* background-color:  #00C641; */

  &:hover {
    background-color: #00f050;
    color: white;
  }
`;

const Button = styled.button`
  background: inherit; 
  border:none; 
  box-shadow:none; 
  border-radius:0; 
  padding:0; 
  overflow:visible; 

  padding: 10px 15px;
  
  cursor: ${(props) => (props.disabled ? 'default' : 'pointer')};

  font-size: 18px;

  &:hover {
    color: ${(props) => (props.disabled ? 'none' : props.theme.colors.primary)};
  }
`;
