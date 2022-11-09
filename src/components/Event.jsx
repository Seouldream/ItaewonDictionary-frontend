import styled from 'styled-components';

const Image = styled.img`
    width:15vw;
    height:15vw;
  `;

export default function Event({ event, onClickEvent }) {
  const {
    id, title, date, imgUrl,
    eventHashTags,
  } = event;

  const handleClickEvent = () => {
    const tempId = 1;
    onClickEvent({ tempId });
  };

  return (
    <button type="button" onClick={handleClickEvent}>
      <div><Image src={imgUrl} alt="event-img" /></div>
      <div>
        {date}
      </div>
      <h3>{title}</h3>
      <ul>
        {eventHashTags.map((hashTag) => (
          <li key={`${id}-${hashTag}`}>
            #
            {hashTag}
          </li>
        ))}
      </ul>
    </button>
  );
}
