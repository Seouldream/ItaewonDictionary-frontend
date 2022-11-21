import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">ItaewonDictionary</Link>
          </li>
          <li>
            <Link to="/grammar">이것만 알면 말할 수 있다 문법!</Link>
          </li>
          <li>
            <Link to="/grammar/admin">관리자페이지 문법</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
