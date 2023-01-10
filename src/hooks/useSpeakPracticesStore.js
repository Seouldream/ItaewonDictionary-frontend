import { speakPracticesStore } from '../stores/SpeakPracticesStore';
import useStore from './useStore';

export default function useSpeakPracticesStore() {
  return useStore(speakPracticesStore);
}
