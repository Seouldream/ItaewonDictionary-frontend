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

  const handleClickWrite = () => {
    navigate('/talks/post');
  };

  const handleClickPageChangeButton = (number) => {
    talksStore.changePageNumber(number);
    navigate(`/talks?page=${number}`);
  };

  return (
    <>
      <h1>잡담소</h1>
      <button type="button" onClick={handleClickWrite}>작성하기</button>
      <Talks
        talks={talks}
        pageNumbers={pageNumbers}
        onClick={handleClickPageChangeButton}
      />
    </>
  );
}
