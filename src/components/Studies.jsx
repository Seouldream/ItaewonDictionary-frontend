import { Link } from 'react-router-dom';

export default function Studies({
  studies, pageNumber, onClick,
}) {
  return (
    <nav>
      <ul>
        {studies.map((study) => (
          <Link
            to={`/studies/${study.id}`}
            key={study.id}
          >
            <li key={study.id} />
            작성자 이름:
            {' '}
            {study.writer}
            제목:
            {study.title}
            내용:
            {study.content}
            해쉬태그:
            #
            {study.hashTag}
          </Link>
        ))}
      </ul>
    </nav>
  );
}
