import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/newbieCamps">입문자</Link>
          </li>
          <li>
            <Link to="/juniorCamps">주니어</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
