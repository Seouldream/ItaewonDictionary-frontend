import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Studies from '../components/Studies';
import useStudiesStore from '../hooks/useStudiesStore';

export default function StudiesPage() {
  const studiesStore = useStudiesStore();

  useEffect(() => {
    studiesStore.fetchStudies();
  }, []);

  const navigate = useNavigate();

  const { studies, pageNumber } = studiesStore;

  const handleClickPageChangeButton = (number) => {
    studiesStore.changePageNumber(number);
    navigate(`/studies?page${number}`);
  };

  return (
    <>
      <h1>스터디</h1>
      <button type="button">작성하기</button>
      <Studies
        studies={studies}
        pageNumber={pageNumber}
        onClick={handleClickPageChangeButton}
      />
    </>
  );
}
