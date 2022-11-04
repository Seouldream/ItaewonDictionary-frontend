import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import NewbieCampsPage from './pages/NewbieCampsPage';
import JuniorCampsPage from './pages/JuniorCampsPage';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import StudiesPage from './pages/StudiesPage';
import StudyDetail from './components/StudyDetail';
import StudyFormPage from './pages/StudyFormPage';
import FreeTalksPage from './pages/FreeTalksPage';
import FreeTalkDetail from './components/FreeTalkDetail';
import FreeTalkFormPage from './pages/FreeTalkFormPage';

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/newbieCamps" element={<NewbieCampsPage />} />
        <Route path="/juniorCamps" element={<JuniorCampsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/studies" element={<StudiesPage />} />
        <Route path="/studies/:id" element={<StudyDetail />} />
        <Route path="/studies/post/new" element={<StudyFormPage />} />
        <Route path="/freeTalks" element={<FreeTalksPage />} />
        <Route path="/freeTalks/:id" element={<FreeTalkDetail />} />
        <Route path="/freeTalks/post/new" element={<FreeTalkFormPage />} />
      </Routes>
    </div>
  );
}
