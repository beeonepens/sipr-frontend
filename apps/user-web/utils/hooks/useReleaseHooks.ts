import { useEffect } from 'react';
import { RELEASE_VERSION } from '@utils/constant';

export function useReleaseHooks() {
  useEffect(() => {
    if (!localStorage.getItem('ver')) {
      localStorage.setItem('ver', RELEASE_VERSION);
    }
  }, []);
}
