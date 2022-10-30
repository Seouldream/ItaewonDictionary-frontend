import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Talks from '../components/Talks';
import useTalksStore from '../hooks/useTalksStore';

export default function TalksPage() {
  const talksStore = useTalksStore();

  useEffect(() => {
    talksStore.fetchTalks();
  }, []);

  const navigate = useNavigate();

  const { talks, pageNumbers } = talksStore;

  const handleClickPageChangeButton = (number) => {
    talksStore.changePageNumber(number);
    navigate(`/talks?page=${number}`);
  };

  console.log('talks', talks);
  return (
    <>
      <h1>잡담소</h1>
      <button type="button">작성하기</button>
      <Talks
        talks={talks}
        pageNumbers={pageNumbers}
        onClick={handleClickPageChangeButton}
      />
    </>
  );
}
