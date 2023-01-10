import { useLocation, useSearchParams } from 'react-router-dom';
import Pagination from '../Pagination';
import Practice from './Practice';

export default function Practices({
  practices, totalPages,
}) {
  const location = useLocation();

  const [searchParams] = useSearchParams();

  return (
    <>
      <ul>
        {practices.map((practice) => (
          <Practice
            key={practice.id}
            practice={practice}
          />
        ))}
      </ul>
      <Pagination
        url={location.pathname}
        total={totalPages}
        current={searchParams.get('page') ?? 1}
      />
    </>
  );
}
