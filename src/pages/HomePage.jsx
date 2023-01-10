import styled from 'styled-components';
import Applications from '../components/Applications';
import Banner from '../components/Banner';
import Information from '../components/Information';
import Reviews from '../components/Reviews';

const Container = styled.div`
  padding-inline: calc((100% - 1200px) / 2);
`;

export default function HomePage() {
  return (
    <>
      <Banner />
      <Container>
        <Applications />
        <Information />
        <Reviews />
      </Container>
    </>
  );
}
