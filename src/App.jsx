import { Route, Routes } from 'react-router-dom';
import { ModalProvider } from 'styled-react-modal';
import styled, { ThemeProvider } from 'styled-components';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import GrammarPage from './pages/grammar/GrammarPage';
import BasicTemplatePage from './pages/basicTemplates/BasicTemplatesPage';
import PracticalTemplatePage from './pages/practicalTemplates/PracticalTemplatesPage';
import GrammarAdminPage from './pages/grammar/GrammarAdminPage';
import GrammarAdminCreatePage from './pages/grammar/GrammarAdminCreatePage';
import BasicTemplatesAdminPage from './pages/basicTemplates/BasicTemplatesAdminPage';
import BasicTemplateFormPage from './pages/basicTemplates/BasicTemplateFormPage';
import PracticalTemplatesByCategoryPage from './pages/practicalTemplates/PracticalTemplatesByCategoryPage';
import PracticalTemplatesAdminPage from './pages/practicalTemplates/PracticalTemplatesAdminPage';
import PracticalTemplatesByCategoryAdminPage from './pages/practicalTemplates/PracticalTemplatesByCategoryAdminPage';
import PracticalTemplateFormPage from './pages/practicalTemplates/PracticalTemplateFormPage';
import GlobalStyle from './styles/GlobalStyle';
import DefaultTheme from './styles/DefaultTheme';
import LoginPage from './pages/LoginPage';
import AdminLoginPage from './pages/AdminLoginPage';
import SpeakPage from './pages/speak/SpeakPracticePage';
import SpeakPracticeDetailPage from './components/speak/SpeakPracticeDetailPage';
import SpeakPracticeFormPage from './pages/speak/SpeakPracticeFormPage';
import SpeakPracticePageAdmin from './pages/speakAdmin/SpeakPracticePageAdmin';
import SpeakPracticeDetailPageAdmin from './components/speakAdmin/SpeakPracticeDetailPageAdmin';
import SpeakPracticeFormPageAdmin from './pages/speakAdmin/SpeakPracticeFormPageAdmin';
import CommunityPage from './pages/community/CommunityPage';
import ActivityDetailPage from './components/community/ActivityDetailPage';
import ActivityFormPage from './pages/community/ActivityFormPage';
import SignupPage from './pages/SignupPage';

export default function App() {
  return (
    <div>
      <ThemeProvider theme={DefaultTheme}>
        <GlobalStyle />
        <Header />
        <ModalProvider>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login-admin" element={<AdminLoginPage />} />
            <Route path="/grammar" element={<GrammarPage />} />
            <Route path="/basicTemplates" element={<BasicTemplatePage />} />
            <Route path="/practicalTemplates" element={<PracticalTemplatePage />} />
            <Route path="/practicalTemplates/categories/:id" element={<PracticalTemplatesByCategoryPage />} />
            <Route path="/speak" element={<SpeakPage />} />
            <Route path="/speak/:id" element={<SpeakPracticeDetailPage />} />
            <Route path="/speak/new" element={<SpeakPracticeFormPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/community/:id" element={<ActivityDetailPage />} />
            <Route path="/community/new" element={<ActivityFormPage />} />
            <Route path="/grammar/admin" element={<GrammarAdminPage />} />
            <Route path="/grammar/admin/new" element={<GrammarAdminCreatePage />} />
            <Route path="/basicTemplates/admin" element={<BasicTemplatesAdminPage />} />
            <Route path="/basicTemplates/admin/new" element={<BasicTemplateFormPage />} />
            <Route path="/practicalTemplates/admin" element={<PracticalTemplatesAdminPage />} />
            <Route path="/practicalTemplates/admin/new" element={<PracticalTemplateFormPage />} />
            <Route path="/practicalTemplates/admin/categories/:id" element={<PracticalTemplatesByCategoryAdminPage />} />
            <Route path="/speak/admin" element={<SpeakPracticePageAdmin />} />
            <Route path="/speak/admin/:id" element={<SpeakPracticeDetailPageAdmin />} />
            <Route path="/speak/admin/new" element={<SpeakPracticeFormPageAdmin />} />
            <Route path="/community/admin" element={<CommunityPage />} />
            <Route path="/community/admin/:id" element={<ActivityDetailPage />} />
            <Route path="/community/admin/new" element={<ActivityFormPage />} />
          </Routes>
        </ModalProvider>
      </ThemeProvider>
    </div>
  );
}
