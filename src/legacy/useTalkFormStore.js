import { useEffect } from 'react';
import { talkFormStore } from '../stores/TalkFormStore';
import useForceUpdate from './useForceUpdate';

export default function useTalkFormStore() {
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    talkFormStore.subscribe(forceUpdate);

    return () => talkFormStore.unsubscribe(forceUpdate);
  }, [forceUpdate]);

  return talkFormStore;
}
