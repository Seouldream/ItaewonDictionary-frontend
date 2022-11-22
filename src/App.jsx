import { Route, Routes } from 'react-router-dom';
import { ModalProvider } from 'styled-react-modal'
import Header from './components/Header';
import NewbieCampsPage from './pages/NewbieCampsPage';
import JuniorCampsPage from './pages/JuniorCampsPage';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import StudiesPage from './pages/StudiesPage';
import StudyDetail from './components/studies/StudyDetail';
import StudyFormPage from './pages/StudyFormPage';
import TalksPage from './pages/TalksPage';
import TalkDetail from './components/talks/TalkDetail';
import TalkFormPage from './pages/TalkFormPage';
import EventDetail from './components/events/EventDetail';
import EventFormPage from './pages/EventFormPage';
import GrammarPage from './pages/grammar/GrammarPage';
import GrammarAdminPage from './pages/grammar/GrammarAdminPage';

export default function App() {
  return (
    <div>
      <Header />
      <ModalProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/grammar" element={<GrammarPage />} />
          <Route path="/grammar/admin" element={<GrammarAdminPage />} />
        </Routes>
      </ModalProvider>
    </div>
  );
}
