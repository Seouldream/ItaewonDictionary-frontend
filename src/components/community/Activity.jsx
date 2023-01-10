import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Article = styled.article`
  padding-top: 1em;
  border-top: 1px solid #D9D9D9;
`;
export default function Activity({
  activity,
}) {
  const content = activity.content ? activity.content.replace(/(<([^>]+)>)/gi, '')
    : '';

  const convertedContent = content.replaceAll('&nbsp;:', '');

  const preview = content ? `${convertedContent.substring(0, 40)} ···`
    : '';

  return (
    <li>
      <Link
        to={`/community/${activity.id}`}
        state={
          {
            id: activity.id,
          }
        }
      >
        <Article>
          {activity.state}
          <h3>
            {activity.title}
          </h3>
          <div>
            {preview}

          </div>
          <p>
            작성자:
            {' '}
            {activity.author}
          </p>
        </Article>
      </Link>
    </li>
  );
}
