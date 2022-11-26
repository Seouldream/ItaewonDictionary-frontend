import { Route, Routes } from 'react-router-dom';
import { ModalProvider } from 'styled-react-modal';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import GrammarPage from './pages/grammar/GrammarPage';
import BasicTemplatePage from './pages/basicTemplates/BasicTemplatePage';
import GrammarAdminPage from './pages/grammar/GrammarAdminPage';
import GrammarAdminCreatePage from './pages/grammar/GrammarAdminCreatePage';

export default function App() {
  return (
    <div>
      <Header />
      <ModalProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/grammar" element={<GrammarPage />} />
          <Route path="/basicTemplates" element={<BasicTemplatePage />} />
          <Route path="/grammar/admin" element={<GrammarAdminPage />} />
          <Route path="/grammar/admin/new" element={<GrammarAdminCreatePage />} />
        </Routes>
      </ModalProvider>
    </div>
  );
}
