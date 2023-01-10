import styled from 'styled-components';

const TextBox = styled.div`
  white-space: normal;
  word-break: keep-all;
`;

const Container = styled.article`
border-bottom: 1px solid #D9D9D9;
padding-block: 2em 2em;
`;

const Title = styled.h2`
  text-align: center;
  font-size: ${((props) => props.theme.size.h4)};
  font-weight: bold;
  margin-bottom: 1.5em;
`;

const List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
`;

const Wrapper = styled.div`
  width: 250px;
  height: 100%;
  h4 {
    font-size: ${((props) => props.theme.size.h6)};
    color: black;
  }
`;

const ImageWrapper = styled.div`
  height:12em;
  width: 12em;
  overflow: hidden;
  margin-bottom: 14px;
  border-radius: 0.6em;
  img {
    width: 100%;
    height: 100%;
    border-radius: 2em;
  }
`;

export default function Applications() {
  return (
    <Container>
      <Title>👀 영어 공부하기 좋은 어플 목록</Title>
      <List>
        <Wrapper>
          <ImageWrapper>
            <img
              src="https://play-lh.googleusercontent.com/7qdnFZdc3mFs7sWXauLyBvJRDqIqENpH_8dlsNAVBqiaKSJ3yJS7-n3zz-qw29F74Q"
              alt="application img"
            />
          </ImageWrapper>
          <h4>헬로우톡</h4>
          <TextBox>
            세계 각국의 언어를 배우고 질문하고 통화까지 가능한 앱입니다.
            <br />
            집에서 심심한데 이야기하고 싶거나 영어로 무언갈 물어볼 때 사용하기 좋습니다.
          </TextBox>
        </Wrapper>
        <Wrapper>
          <ImageWrapper>
            <img
              src="https://news.koreadaily.com/data/photo/originals/2021/11/03/104131391.jpg"
              alt="application img"
            />
          </ImageWrapper>
          <h4>틴더</h4>
          <TextBox>
            친구보다는 데이팅 앱으로 유명한 틴더입니다.
            <br />
            친구가 최근 코로나 이후 소셜라이징을 위한 앱으로 변신을 꿈꾸고 있습니다. 데이팅 앱으로
            알려진 만큼 부정적인 견해도 많지만 그래도 여전히 가장 쉽고 빠르게 외국인 친구들을 사귈 수 있는 앱입니다.
          </TextBox>
        </Wrapper>
        <Wrapper>
          <ImageWrapper>
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ8NDQ0NFREWFhURFRUYHSggGBoxHRUVITEhJSkrLi8uFx8zODMsNygtLisBCgoKDQ0NFQ8PFS0ZFR0rLSsrKy0rKystKystLSstKysrLS0uLSstKystKy0rKystKysrKy0rLSstLTc3LS0tLf/AABEIAMcA/QMBEQACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAQQFBgMCB//EAD0QAAIBAgIFCAgFAgcAAAAAAAABAgMRBCEFEjFxsQYTNEFRgZGyIjNhcnOCocEkMlLR8CPhFBUWQmKi4v/EABoBAQEAAwEBAAAAAAAAAAAAAAABAwQFBgL/xAAxEQEAAgEBBgQFAwQDAAAAAAAAAQIDEQQFEiExQTIzUXETIjSBkSNhsRRCwdEVJKH/2gAMAwEAAhEDEQA/APw8j6QAAAAAAAAAAAAAAAAASBAAAAAAABQAEAAAAAABQIAAoEAAUCAAAACgAIBQIAAoAABAAAAAAAAAAAAAAAAAAAAAAAAABQIJAgAAAACgAIAAAAAAAAAAAAFAgAABQIAAAAKBAAAAAAAUCAUCAAAAAAAoEAAAAAAAAAAAACgQAAAAAAAAAAAAAAAAAAAAACgAIAAAAAAAAAAAAACgQAAAAUABAKgAIBVCAAAAABQIAAAUCAAAAABQAEAAUCAAAAAAAAB3HJCceYp3jFuMpbUneLk/uv8Asc7a9Ytyl6vc8Vts/DMc2jicPGM5RsrJ5ZLOO1Pwsa9bz6u3GLHasTwx+FTE4aNSnUp2XpxaTssn1PxsZovNbROrVzbNTLhvj4Y1mHBSi02nk02mvajpvBzExMxPWEASUQQAAAAAAAAAAAAAFAAQAAAAAAAAAAoACDruTUtWlSfU1JPvmzT2mNdXpNz24a1dHi1rRhPr/I96zX3XynPryl6SneFPrM0c4fNvltq47lHhubxMml6NRKot72/W50NntxUj9ni974PhbVbTpbnDPoQ1pWMszo0MdeK2iasLZdxYlLV0eZXyggAAAAAAAAABQAACAAAAAAAoEAoEAAAKOs0Gvw1PdLzs1Mvieg3dH6ES6PCS5ym49copr3ln+6+Y5966WekxX1rWytJH3WWTLXkxeVGG16EaqWdKWfuSyf1sbWz20vNfVwd94fiYK5Y61/iWFoWGtWt/wl9jayeF5/Yo1y6fsYqn6b96XEVnk+slPm0VqdO9RR7WfWvJrRX59HzWhqzlHsbRY6JeNLTDzK+QgAAAAAAAAABQIAAAAAACgAIAAAAKOv0CvwtP5/PI08vjej3bGuzx92to+o4u2y2q0+zJfezNbLHd2dktymr2xEbSdsk80uxPNL7dxiq3usKtSkpxnTlsnFxfetv87DNrpMWhpZMcXpfFbu5LQ0HDEyhLJxU4vemkb951rq8hsdZptHDPWNYetanepvbPnszTXXJ+XhRp2rx95cD61+Vh+H+sraRX9er8SXE+69Ia2fzbe6sViCgQAAAAAAASBAAAAAAAAAoEAAAAACjseT6/C0vn88jSzeN6jdUf9aPuv0snfqsr7rGK0aw6GOeC+q9V9KKfWsn358dbxRr9JdKvoqy2pmWvONGvl5WizDxWH5vHKa2Vabl8yaT+3ibWO2uPT0ee2vD8PbuOOlo1/wBvCnG9Vbn9j7no1qRrl/L4dP8Arp9jjwGvJ9cP6jL0n0it8SXEzV8MOVtHm291UrEACgQCgQAAAAAAAAAAAAAACgQABQIAHZ8m+jUt8/OzSz+N6ndH035XksnuXBmLXo6Nq8pWMJPWhbrat8yt/wCTHeNJbWz5OKkT3ec1t8RWX1mrrWY+6pjKalGM+unK/wAryf28DNSeG2nq5m00jJii/erIwvrluf2NmejjYfNeso/1X8vA+ezPMfPLB0n0it8SXE2K+GHE2jzbe6qVhAAAAAAAAAAABIEAABQAEAAAAACgQAOy5N9Gpb5+dmltHieo3T9PH3aUOvcuDME9nW05WeeDqWm49q1l3LP6P6H1kjlEsOx30tNFmss79/7/AFMUOjbpqrra4vY+H8uZZ6RLRiNL2pPSWFh4OOI1XtjrJ+KNqZ1rq4FKTTaJrPWNViS9OW5cD57NjT55c7pTpFb4kuJsU8MODtHnX91U+mEAAAAAAAKBAKBAKBAAAAAAAAAAAAADsuTfRqW+fnZpbR4nqN0/Tx92lS69y4Gvbs7FelvZm4+vzOrV/RKDfu3Sf0bNmteKNHGzZvgzGT0lsSaaTWafX/O7xNPo9DSYtVVq9T7MmZq+jRz8tLejPxdK2Ip1FsnB33q32sZcc/LMejnbVj02iuSOlofP++W5cD67Mf8AdLm9KdIrfEkbNfDDgbT51/dVPphAAAoEAAUCAAKJAggAAAAAAAAAAAAAA7Hk30alvn52aWfxPUbp+nj7tSl17l5TXt2divSzF5QeonujxibeLq4G8PKsu8n8TzuFjd3lD0Hvjs+hgz14ck/u6m6No+Js1descp/wt1I3uu1fU+Ky281ddY9VaUdaHtg9Zff6X8DL0t7tKY48WneqnH80ty4GTs0Y8Uub0r0it8SRs08MOBtPnX91U+mEAAABQIAAAAAAAAAAUABAAFAgACgQAOy5N9Gpb5+dmltHieo3T9PH3adPr3Lymvbs7FOlmNyg9RPdHjE28PVwN4+TZR5J4rUqzp9U460fej/a/gXaa61ifRh3Hn4c1sU9LR/7Dp5+zqz7jTr1eoy868Udle+rP2SMs86tGJ4MunaVGUdWpUXZbwtkZYnWsS0b14Mloc3pTpFb4kjZp4Yee2jzr+6ofTCAAAAAAAAABQIJKiCKACgQABQIAAAAKBB2XJvo1LfPzs0s/il6jdP08fdpU+vu4Gvbs7Nf7mRyg9RPdHjE28PVwN4+TZy+FrulUhUW2ElLeutGzavFEw4OHLOLJXJHWJd/CSkk1mpJNe1PNHLmNHv6Xi9dY6T/AJV8Qnq364szV/loZomK696q+KWcZrZONnvSuvpwLTvDDtMa8OSO8OV0p0ir77N2vhh5faPNt7qp9MIAIAAAAAAAAACSiCAAAFAgACgQAAAAB2fJzo1LfLzs0to8UvU7p+nj7tKGx/JwZrz1h2Kd/Zj8oPUT3R4xNrD1cHePk2ckbjzjsOTuJ5zDxT/NSbg922P7GhnrpfX1et3Rn+Js8V715f6aFRXfskvqY6/w3s0RM/taFaC1qc4vbC7X88TJPK0S1KRxYrUnrDktJ+vq++zdr0h5TaPNt7qp9MQQAAAAAAASBBQIJKIIAAAAAAAAAoEAABuaN07GhRhT5uU3G+esorNtmDJh4p11dXZN5RgxRTh1l6PlPOzSoxV7bZt7E12e0+f6aPVn/wCcyRrpSPyo47TFStFwlGCTte175W9vsMtcUV6NDPt2TLWazEaM0yNJc0dpGph3JwUXrpJqV7ZbGfF8cX6trZdsybNMzTu0P9SVWs6VPJ3yckY/6evq3Z3zmmNJrCaXKC09Z0sntSn/AGE4NY01Me9prfimjJxlVVKs5xTSlJtJ7UuwzVjSIhzM14vkteI0iZeBWMAAAAAoACAAAASBAAAAAAAAAoEAAUABAAACgQABQIAAAAAAABQIAAoEAAAAAAAAAAAAAAAAAKBAAAAAAAAAAAAAoEAAUCAAKBAAACgQCgQAAACQIAACgQAAAAAAAAAAAAAAABQAAAAAgAAAAAAAAAAAoEAAAKBAAAAAAAAA9qeFqyWtGnUlH9UYSa8So+YUZybjGE5SW2Ki3JdwCpQqRajKE4uX5VKLTe5dZB9SwlVNRdKopSvqxcJJyt2K2ZR8ujNS1HCSn+hxet4AfUsJWTUXSqKUr6sXTkm7bbKwHzGhNycFCbmtsFFuS7iD4aadmrNZNPamFQAAAAAAoEAAAAAAAAoEAAUCCQIKAAAQAOn0diKlLRFadOcoTjiFaUXZq7hcqNzCpSq4GvNJYiph5qplZzWrF3ffxAw/81p0tIc5OpVr06aqQcpx9KhKU2nbtSy8QjQnhnKthMVSxM6+HliMozd3Tcr3s+zK1uoK9Kq5taUxFNL/ABEZ6qltlCCpQd12bZPu9gGbo+liJvR+Kq4h1YTxGpCMr68G9ZSz7PQA1aVClicRSxtG0alKdSliI3zyjKN9+zen7AOCuBBFAAAAAAAABQIAAAUABACAAKFAAQAAADSwOmsRQp81TcNTWcmpU4yvJ9bvuRUI6cxSrc+6mtU1XBOUU4xi+pLYgPuXKDEuSlemra10qUFGd1nrK2YEVNPYmUqTvCKoy1qcI04xpqVmr272B8Q01iY1p14zUZ1Lc5aK1J2VleOwD1qcoMTLm/VRVKfOQjGlGMVOzV7fMwK2E0pXo1Z1actWVRtzjb0JXd813kFJFV//2Q=="
              alt="application img"
            />
          </ImageWrapper>
          <h4>넷플릭스</h4>
          <TextBox>
            세계 최대 OTT 서비스 회사로 수많은 컨텐츠를 정확한 영어자막과 함께 제공합니다. 고화질과 고품질의
            영어자막을 구하기 쉽지않은데 넷플릭스는 영어를 정확하고 빠르게 어디서든 공부할 수 있도록 도와줍니다.
          </TextBox>
        </Wrapper>
        <Wrapper>
          <ImageWrapper>
            <img
              src="data:image/png;base64,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"
              alt="application img"
            />
          </ImageWrapper>
          <h4>유튜브</h4>
          <TextBox>
            전 세계 최대 크기의 비디오 플랫폼인 유튜브는 수 억개의 영상 자료가 있고 또한 자막 서비스가 제공됩니다.
            영상 속도를 조절할 수 있으며 가감없는 일상의 영어부터 정말 다양한 상황 속의 영어가 있어 강력 추천하는 앱입니다.
          </TextBox>
        </Wrapper>
      </List>
    </Container>
  );
}
