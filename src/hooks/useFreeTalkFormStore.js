import { useEffect } from 'react';
import { freeTalkFormStore } from '../stores/FreeTalkFormStore';
import useForceUpdate from './useForceUpdate';

export default function useFreeTalkFormStore() {
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    freeTalkFormStore.subscribe(forceUpdate);

    return () => freeTalkFormStore.unsubscribe(forceUpdate);
  }, [forceUpdate]);

  return freeTalkFormStore;
}
