import { useEffect } from 'react';
import { grammarAdminFormStore } from '../stores/GrammarAdminFormStore';

import useForceUpdate from './useForceUpdate';

export default function useGrammarFormStore() {
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    grammarAdminFormStore.subscribe(forceUpdate);

    return () => grammarAdmindFormStore.unsubscribe(forceUpdate);
  }, [forceUpdate]);

  return grammarAdmindFormStore;
}
