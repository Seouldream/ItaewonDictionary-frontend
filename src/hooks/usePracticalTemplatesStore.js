import { useEffect } from 'react';
import { practicalTemplatesStore } from '../stores/PracticalTemplatesStore';

import useForceUpdate from './useForceUpdate';

export default function usePraciticalTemplatesStore() {
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    practicalTemplatesStore.subscribe(forceUpdate);

    return () => practicalTemplatesStore.unsubscribe(forceUpdate);
  }, [forceUpdate]);

  return practicalTemplatesStore;
}
