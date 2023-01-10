import { communityStore } from '../stores/CommunityStore';
import useStore from './useStore';

export default function useCommunityStore() {
  return useStore(communityStore);
}
