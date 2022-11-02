import { useEffect } from 'react';
import { studyFormStore } from '../stores/StudyFormStore';
import useForceUpdate from './useForceUpdate';

export default function usePostFormStore() {
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    studyFormStore.subscribe(forceUpdate);

    return () => studyFormStore.unsubscribe(forceUpdate);
  }, [forceUpdate]);

  return studyFormStore;
}
