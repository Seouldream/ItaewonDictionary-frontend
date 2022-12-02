import { useEffect } from 'react';
import { basicTemplatesStore } from '../stores/BasicTemplatesStore';

import useForceUpdate from './useForceUpdate';

export default function useBasicTemplatesStore() {
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    basicTemplatesStore.subscribe(forceUpdate);

    return () => basicTemplatesStore.unsubscribe(forceUpdate);
  }, [forceUpdate]);

  return basicTemplatesStore;
}
