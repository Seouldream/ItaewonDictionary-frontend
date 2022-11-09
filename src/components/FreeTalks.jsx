import FreeTalk from './FreeTalk';

export default function FreeTalks({
  freeTalks, onClickFreeTalk,
}) {
  return (
    <ul>
      {freeTalks.map((freeTalk) => (
        <li key={freeTalk.id}>
          <FreeTalk
            key={freeTalk.id}
            freeTalk={freeTalk}
            onClickFreeTalk={onClickFreeTalk}
          />
        </li>
      ))}
    </ul>
  );
}
