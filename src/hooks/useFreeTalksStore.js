import { useEffect } from 'react';
import { freeTalksStore } from '../stores/FreeTalksStore';

import useForceUpdate from './useForceUpdate';

export default function useFreeTalksStore() {
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    freeTalksStore.subscribe(forceUpdate);

    return () => freeTalksStore.unsubscribe(forceUpdate);
  }, [forceUpdate]);

  return freeTalksStore;
}
