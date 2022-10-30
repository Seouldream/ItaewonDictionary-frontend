import { Link } from 'react-router-dom';

export default function Talks({
  talks, pageNumbers, onClick,
}) {
  console.log('talks', talks);
  const handleClickPageChangeButton = (pageNumber) => {
    onClick(pageNumber);
  };
  return (
    <>
      <nav>
        <ul>
          {talks.map((talk) => (
            <Link
              to={`/talks/${talk.id}`}
              key={talk.id}
            >
              <li key={talk.id} />
              작성자 이름:
              {' '}
              {talk.writer}
              제목:
              {talk.title}
              내용:
              {talk.content}
              해쉬태그:
              #
              {talk.hashTag}
            </Link>
          ))}
        </ul>
      </nav>
      <nav>
        {pageNumbers.map((pageNumber) => (
          <li key={pageNumber}>
            <button
              type="button"
              onClick={() => handleClickPageChangeButton(pageNumber)}
            >
              {pageNumber}
            </button>
          </li>
        ))}
      </nav>
    </>
  );
}
