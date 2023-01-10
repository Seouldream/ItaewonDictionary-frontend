import { speakPracticesAdminStore } from '../stores/SpeakPracticesAdminStore';
import useStore from './useStore';

export default function useSpeakPracticesStore() {
  return useStore(speakPracticesAdminStore);
}
