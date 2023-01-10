import { useLocation, useSearchParams } from 'react-router-dom';
import Pagination from '../Pagination';
import Activity from './Activity';

export default function Activities({
  activities, totalPages,
}) {
  const location = useLocation();

  const [searchParams] = useSearchParams();

  return (
    <>
      <ul>
        {activities.map((activity) => (
          <Activity
            key={activity.id}
            activity={activity}
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
