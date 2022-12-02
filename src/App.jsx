import { Route, Routes } from 'react-router-dom';
import { ModalProvider } from 'styled-react-modal';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import GrammarPage from './pages/grammar/GrammarPage';
import BasicTemplatePage from './pages/basicTemplates/BasicTemplatesPage';
import PracticalTemplatePage from './pages/practicalTemplates/PracticalTemplatePage';
import GrammarAdminPage from './pages/grammar/GrammarAdminPage';
import GrammarAdminCreatePage from './pages/grammar/GrammarAdminCreatePage';
import BasicTemplatesAdminPage from './pages/basicTemplates/BasicTemplatesAdminPage';
import BasicTemplateFormPage from './pages/basicTemplates/BasicTemplateFormPage';

export default function App() {
  return (
    <div>
      <Header />
      <ModalProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/grammar" element={<GrammarPage />} />
          <Route path="/basicTemplates" element={<BasicTemplatePage />} />
          <Route path="/practicalTemplates" element={<PracticalTemplatePage />} />
          <Route path="/grammar/admin" element={<GrammarAdminPage />} />
          <Route path="/grammar/admin/new" element={<GrammarAdminCreatePage />} />
          <Route path="/basicTemplates/admin" element={<BasicTemplatesAdminPage />} />
          <Route path="/basicTemplates/admin/new" element={<BasicTemplateFormPage />} />
        </Routes>
      </ModalProvider>
    </div>
  );
}
