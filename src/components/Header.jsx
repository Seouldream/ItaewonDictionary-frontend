/* eslint-disable import/no-extraneous-dependencies */
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useLocalStorage } from 'usehooks-ts';

const Container = styled.header`
  border-bottom: 1px solid #D9D9D9;
  height: 4em;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-inline: calc((100% - 1200px) / 2);
  height: 100%;
`;

const MainMenu = styled.nav`
  display: flex;
  height: 100%;

  li a {
    display: flex;
    flex-direction: row;
    &:focus {
      text-decoration: underline solid #00C641 .2em;
      text-underline-position: under;
    }
  }
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  li {
    font-weight: bold;
    padding-right: 2.5em;
  }
`;

const SideMenu = styled.nav`
  display: flex;
  align-items: center;
  
`;

const LogoutButton = styled.button`
  font-size: 1em;
  font-weight: bold;
  background: none;
  border: none;
  cursor: pointer;
`;

const HomeLogo = styled.img`
  width: 8em;

`;

const HomeDoughnut = styled.img`
  width: 4em;
`;

export default function Header() {
  const navigate = useNavigate();

  const [accessInfo, setAccessInfo] = useLocalStorage('accessInformation', { accessToken: '', name: '', role: '' });

  const { accessToken } = accessInfo;

  const { name } = accessInfo;

  const { role } = accessInfo;

  const handleLogout = () => {
    setAccessInfo({ accessToken: '', name: '', role: '' });
    navigate('/');
  };

  if (accessToken && role === 'admin') {
    return (
      <Container>
        <Wrapper>
          <MainMenu>
            <List>
              <li>
                <Link to="/">
                  <HomeDoughnut
                    src="https://itaewondictionary.s3.ap-northeast-2.amazonaws.com/SimpleDoughnut-removebg.png"
                    alt="doughnut"
                  />
                  <HomeLogo
                    src="https://itaewondictionary.s3.ap-northeast-2.amazonaws.com/ItaewonDictionaryLogo2-removebg.png"
                    alt="logoImg"
                  />
                </Link>
              </li>
              <li>
                <Link to="/grammar/admin">문법</Link>
              </li>
              <li>
                <Link to="/basicTemplates/admin">1분템플릿</Link>
              </li>
              <li>
                <Link to="/practicalTemplates/admin">실전템플릿</Link>
              </li>
              <li>
                <Link to="/speak/admin">말하고 첨삭받기</Link>
              </li>
              <li>
                <Link to="/community/admin">커뮤니티</Link>
              </li>
            </List>
          </MainMenu>
          <SideMenu>
            <List>
              <li>
                {name}
                님 안녕하세요!
              </li>
              <li>
                <LogoutButton type="button" onClick={handleLogout}>로그아웃</LogoutButton>
              </li>
            </List>
          </SideMenu>
        </Wrapper>
      </Container>
    );
  }

  return (
    <Container>
      {accessToken && role === 'user' ? (
        <Wrapper>
          <MainMenu>
            <List>
              <li>
                <Link to="/">
                  <HomeDoughnut
                    src="https://itaewondictionary.s3.ap-northeast-2.amazonaws.com/SimpleDoughnut-removebg.png"
                    alt="doughnut"
                  />
                  <HomeLogo
                    src="https://itaewondictionary.s3.ap-northeast-2.amazonaws.com/ItaewonDictionaryLogo2-removebg.png"
                    alt="logoImg"
                  />
                </Link>
              </li>
              <li>
                <Link to="/grammar">문법</Link>
              </li>
              <li>
                <Link to="/basicTemplates">1분템플릿</Link>
              </li>
              <li>
                <Link to="/practicalTemplates">실전템플릿</Link>
              </li>
              <li>
                <Link to="/speak">말하고 첨삭받기</Link>
              </li>
              <li>
                <Link to="/community">커뮤니티</Link>
              </li>
            </List>
          </MainMenu>
          <SideMenu>
            <List>
              <li>
                {name}
                님 안녕하세요!
              </li>
              <li>
                <LogoutButton type="button" onClick={handleLogout}>로그아웃</LogoutButton>
              </li>
            </List>
          </SideMenu>
        </Wrapper>
      ) : (
        <Wrapper>
          <MainMenu>
            <List>
              <li>
                <Link to="/">
                  <HomeDoughnut
                    src="https://itaewondictionary.s3.ap-northeast-2.amazonaws.com/SimpleDoughnut-removebg.png"
                    alt="doughnut"
                  />
                  <HomeLogo
                    src="https://itaewondictionary.s3.ap-northeast-2.amazonaws.com/ItaewonDictionaryLogo2-removebg.png"
                    alt="logoImg"
                  />
                </Link>
              </li>
              <li>
                <Link to="/grammar">문법</Link>
              </li>
              <li>
                <Link to="/basicTemplates">1분템플릿</Link>
              </li>
              <li>
                <Link to="/practicalTemplates">실전템플릿</Link>
              </li>
              <li>
                <Link to="/speak">말하고 첨삭받기</Link>
              </li>
              <li>
                <Link to="/community">커뮤니티</Link>
              </li>
            </List>
          </MainMenu>
          <SideMenu>
            <List>
              <li>
                <Link to="/signup">회원가입</Link>
              </li>
              <li>
                <Link to="/login">로그인</Link>
              </li>
            </List>
          </SideMenu>
        </Wrapper>
      )}
    </Container>
  );
}
