import { useEffect } from 'react';
import { grammarStore } from '../stores/GrammarStore';

import useForceUpdate from './useForceUpdate';

export default function useGrammarStore() {
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    grammarStore.subscribe(forceUpdate);

    return () => grammarStore.unsubscribe(forceUpdate);
  }, [forceUpdate]);

  return grammarStore;
}
