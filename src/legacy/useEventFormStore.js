import { useEffect } from 'react';
import { eventFormStore } from '../stores/EventFormStore';
import useForceUpdate from './useForceUpdate';

export default function useEventFormStore() {
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    eventFormStore.subscribe(forceUpdate);

    return () => eventFormStore.unsubscribe(forceUpdate);
  }, [forceUpdate]);

  return eventFormStore;
}
