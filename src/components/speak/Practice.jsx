import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Article = styled.article`
  padding-top: 1em;
  border-top: 1px solid #D9D9D9;
`;

export default function Practice({
  practice,
}) {
  return (
    <li>
      <Link
        to={`/speak/${practice.id}`}
        state={
          {
            id: practice.id,
          }
        }
      >
        <Article>
          {practice.state}
          <h3>
            {practice.title}
          </h3>
          <p>{practice.situation}</p>
          <p>
            작성자:
            {' '}
            {practice.userName}
          </p>
        </Article>
      </Link>
    </li>
  );
}
