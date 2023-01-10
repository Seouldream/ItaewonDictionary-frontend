import { useEffect } from 'react';
import useSpeakPracticesStore from '../../hooks/useSpeakPracticesStore';
import PracticesAdmin from './PracticesAdmin';

export default function SpeakContentsAdmin() {
  const speakPracticesStore = useSpeakPracticesStore();

  useEffect(() => {
    speakPracticesStore.fetchPractices();
  }, []);

  const { practices } = speakPracticesStore;
  return (
    <PracticesAdmin
      practices={practices}
    />
  );
}
