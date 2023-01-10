import PracticeAdmin from './PracticeAdmin';

export default function PracticesAdmin({
  practices,
}) {
  return (
    <ul>
      {practices.map((practice) => (
        <PracticeAdmin
          key={practice.id}
          practice={practice}
        />
      ))}
    </ul>
  );
}
