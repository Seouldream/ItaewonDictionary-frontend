import { Link } from 'react-router-dom';

export default function PracticeAdmin({
  practice,
}) {
  return (
    <li>
      <Link
        to={`/speak/admin/${practice.id}`}
        state={
          {
            id: practice.id,
          }
        }
      >
        <hr />
        <article>
          {practice.state}
          <h3>
            {practice.title}
          </h3>
          <p>{practice.situation}</p>
          <p>
            작성자:
            {' '}
            {practice.userNickname}
          </p>
        </article>
      </Link>
    </li>
  );
}
