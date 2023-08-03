import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);

function setUpKakao() {
  Kakao.init('eb025690ebb7084fc76a116493672ea3'); // 사용하려는 앱의 JavaScript 키 입력
}

function Root() {
  return (
    setUpKakao()
  );
}

root.render((
  <BrowserRouter>
    <Root />
    <App />
  </BrowserRouter>
));
