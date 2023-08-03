import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import useCommunityStore from '../../hooks/useCommunityStore';
import Activities from './Activities';

export default function CommunityContents() {
  const communityStore = useCommunityStore();

  const [searchParams] = useSearchParams();
  const page = searchParams.get('page') ?? 1;

  const { activities, loading } = communityStore;

  useEffect(() => {
    communityStore.fetchActivities(page);
  }, [page]);

  if (loading) {
    return (
      <p>컨텐츠를 불러오고 있습니다.</p>
    );
  }

  if (activities.length === 0) {
    return (
      <div>만들어진 활동이 없어요! 활동을 만들어 보세요!</div>
    );
  }

  return (
    <Activities
      activities={communityStore.activities}
      totalPages={communityStore.totalPages}
    />
  );
}
