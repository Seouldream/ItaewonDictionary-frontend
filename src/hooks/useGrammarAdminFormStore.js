import { useEffect } from 'react';
import { grammarAdminFormStore } from '../stores/GrammarAdminFormStore';

import useForceUpdate from './useForceUpdate';

export default function useGrammarAdminFormStore() {
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    grammarAdminFormStore.subscribe(forceUpdate);

    return () => grammarAdminFormStore.unsubscribe(forceUpdate);
  }, [forceUpdate]);

  return grammarAdminFormStore;
}
