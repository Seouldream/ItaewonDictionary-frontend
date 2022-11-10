import Event from './Event';

export default function Events({ events, onClickEvent }) {
  return (
    <ul>
      {events.map((event) => (
        <Event
          key={event.id}
          event={event}
          onClickEvent={onClickEvent}
        />
      ))}
    </ul>
  );
}
