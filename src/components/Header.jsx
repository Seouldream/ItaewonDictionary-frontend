import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Cocheline</Link>
          </li>
          <li>
            <Link to="/newbieCamps">입문자</Link>
          </li>
          <li>
            <Link to="/juniorCamps">주니어</Link>
          </li>
          <li>
            <Link to="/events">이벤트</Link>
          </li>
          <li>
            <Link to="/studies">스터디</Link>
          </li>
          {/* <li>
            <Link to="/talks">잡담소</Link>
          </li> */}
        </ul>
      </nav>
    </header>
  );
}
