import { useEffect } from 'react';
import { talksStore } from '../stores/TalksStore';

import useForceUpdate from './useForceUpdate';

export default function useFreeTalksStore() {
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    talksStore.subscribe(forceUpdate);

    return () => talksStore.unsubscribe(forceUpdate);
  }, [forceUpdate]);

  return talksStore;
}
