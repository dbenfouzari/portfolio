import { useCallback, useEffect, useState } from 'react';
import { useDebouncedCallback } from 'use-debounce';

import { IS_CLIENT } from '../constants';

type WindowSize = { width?: number; height?: number };

const getSizeFromWidth = (width?: number) => {
  if (!width) return null;
  // Same as styles/_variables.scss $breakpoint
  if (width > 860) return 'md';
  return 'xs';
};

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSize>({ width: undefined, height: undefined });

  const handleResize = useCallback(() => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }, []);

  const debouncedHandleResize = useDebouncedCallback(handleResize, 100);

  useEffect(() => {
    if (!IS_CLIENT) return;

    window.addEventListener('resize', debouncedHandleResize);

    debouncedHandleResize();

    return () => {
      window.removeEventListener('resize', debouncedHandleResize);
    };
  }, [debouncedHandleResize]);

  return getSizeFromWidth(windowSize.width);
};

export default useWindowSize;
