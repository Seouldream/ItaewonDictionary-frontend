import { useEffect } from 'react';
import { eventsStore } from '../stores/EventsStore';
import useForceUpdate from './useForceUpdate';

export default function useEventsStore() {
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    eventsStore.subscribe(forceUpdate);

    return () => eventsStore.unsubscribe(forceUpdate);
  }, [forceUpdate]);

  return eventsStore;
}
