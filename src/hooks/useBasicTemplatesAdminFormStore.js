import { useEffect } from 'react';
import { basicTemplatesAdminFormStore } from '../stores/BasicTemplatesAdminFormStore';

import useForceUpdate from './useForceUpdate';

export default function useBasicTemplatesAdminFormStore() {
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    basicTemplatesAdminFormStore.subscribe(forceUpdate);

    return () => basicTemplatesAdminFormStore.unsubscribe(forceUpdate);
  }, [forceUpdate]);

  return basicTemplatesAdminFormStore;
}
