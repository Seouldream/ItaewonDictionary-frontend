import FreeTalk from './FreeTalk';

export default function FreeTalks({
  freeTalks, onClickFreeTalk,
}) {
  return (
    <ul>
      {freeTalks.map((freeTalk) => (
        <FreeTalk
          key={freeTalk.id}
          freeTalk={freeTalk}
          onClickFreeTalk={onClickFreeTalk}
        />
      ))}
    </ul>
  );
}
