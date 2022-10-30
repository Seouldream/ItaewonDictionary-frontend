import { useEffect } from 'react';
import { studiesStore } from '../stores/StudiesStore';
import useForceUpdate from './useForceUpdate';

export default function useStudiesStore() {
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    studiesStore.subscribe(forceUpdate);

    return () => studiesStore.unsubscribe(forceUpdate);
  }, [forceUpdate]);

  return studiesStore;
}
