import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BasicTemplates from '../../components/basicTemplate/BasicTemplates';
import useBasicTemplatesAdminFormStore from '../../hooks/useBasicTemplatesAdminFormStore';

export default function BasicTemplatePage() {
  const navigagte = useNavigate();
  const basicTemplatesStore = useBasicTemplatesAdminFormStore();

  useEffect(() => {
    basicTemplatesStore.fetchBasicTemplates();
  }, []);

  const { basicTemplates } = basicTemplatesStore;

  const handleClickNavigate = () => {
    navigagte('/practicalTemplates');
  };

  if (basicTemplates.length === 0) {
    return (
      <p>컨텐츠 준비중입니다. 잠시만 기다려주세요.</p>
    );
  }

  return (
    <>
      <h1>두번째 스텝 이태원에서 바로 먹히는 1분 완성 템플릿</h1>
      <p>일상 회화에서 자주 쓰는 표현들로만 모아보았어요!</p>
      <p>다음을 발음해보고 따라하면서 익혀보아요!</p>
      <BasicTemplates
        basicTemplates={basicTemplates}
      />
      <p>기초 템플릿을 다 보았다면?</p>
      <button
        type="button"
        onClick={handleClickNavigate}
      >
        실전 템플릿으로 바로가기!
      </button>
    </>
  );
}
