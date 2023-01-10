import { activityCommentsStore } from '../stores/ActivityCommentsStore';
import useStore from './useStore';

export default function useSpeakPracticeCommentsStore() {
  return useStore(activityCommentsStore);
}
