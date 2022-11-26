import { useEffect } from 'react';
import { basicTemplateStore } from '../stores/BasicTemplateStore';

import useForceUpdate from './useForceUpdate';

export default function useBasicTemplateStore() {
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    basicTemplateStore.subscribe(forceUpdate);

    return () => basicTemplateStore.unsubscribe(forceUpdate);
  }, [forceUpdate]);

  return basicTemplateStore;
}
