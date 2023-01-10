import { useEffect } from 'react';
import { practicalTemplatesAdminFormStore } from '../stores/PracticalTemplatesAdminFormStore';

import useForceUpdate from './useForceUpdate';

export default function usePracticalTemplatesAdminFormStore() {
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    practicalTemplatesAdminFormStore.subscribe(forceUpdate);

    return () => practicalTemplatesAdminFormStore.unsubscribe(forceUpdate);
  }, [forceUpdate]);

  return practicalTemplatesAdminFormStore;
}
