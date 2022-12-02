import BasicTemplate from './BasicTemplate';

export default function BasicTemplates({
  basicTemplates,
}) {
  return (
    <>
      <ul>
        {basicTemplates.map((basicTemplate, index) => (
          <BasicTemplate
            key={basicTemplate.id}
            basicTemplate={basicTemplate}
            index={index}
          />
        ))}
      </ul>
      <div>
        Tip! 정말로 그 상황속에 처한 듯 연기를 하시면 실력이 확연히 늘어요!
        꼭 내가 그 상황에 있다고 가정하고 스스로의 발음이 어색하고 오글거리더라도 더욱 연기하는 것 처럼 과장되게 해주세요.
        상대방이 어느나라에서 어떤 성별과 성격을 가졌을지 상상하면 더욱 좋아요!
      </div>
    </>
  );
}
