import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import useSpeakPracticesStore from '../../hooks/useSpeakPracticesStore';
import Practices from './Practices';

export default function SpeakContents() {
  const speakPracticesStore = useSpeakPracticesStore();

  const [searchParams] = useSearchParams();
  const page = searchParams.get('page') ?? 1;

  useEffect(() => {
    speakPracticesStore.fetchPractices(page);
  }, [page]);

  if (speakPracticesStore.practices.length === 0) {
    return (
      <div>등록된 게시글이 없어요! 게시글을 등록해 보세요!</div>
    );
  }
  return (
    <Practices
      practices={speakPracticesStore.practices}
      totalPages={speakPracticesStore.totalPages}
    />
  );
}
