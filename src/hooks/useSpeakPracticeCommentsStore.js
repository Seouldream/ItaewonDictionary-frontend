import { speakPracticeCommentsStore } from '../stores/SpeakPracticeCommentsStore';
import useStore from './useStore';

export default function useSpeakPracticeCommentsStore() {
  return useStore(speakPracticeCommentsStore);
}
