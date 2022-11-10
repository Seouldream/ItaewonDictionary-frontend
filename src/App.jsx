import { Route, Routes } from 'react-router-dom';
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

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/newbieCamps" element={<NewbieCampsPage />} />
        <Route path="/juniorCamps" element={<JuniorCampsPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/events/:id" element={<EventDetail />} />
        <Route path="/events/post/new" element={<EventFormPage />} />
        <Route path="/studies" element={<StudiesPage />} />
        <Route path="/studies/:id" element={<StudyDetail />} />
        <Route path="/studies/post/new" element={<StudyFormPage />} />
        <Route path="/talks" element={<TalksPage />} />
        <Route path="/talks/:id" element={<TalkDetail />} />
        <Route path="/talks/post/new" element={<TalkFormPage />} />
      </Routes>
    </div>
  );
}
