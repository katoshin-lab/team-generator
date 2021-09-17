import React, { useEffect } from 'react';

const useResizeObserver = (elements: React.MutableRefObject<HTMLElement>[], callback: (entries: ResizeObserverEntry[]) => void) => {
  useEffect(() => {

    const resizeObserver = new ResizeObserver(entries => {
      callback(entries);
    });

    for (const el of elements) {
      el.current && resizeObserver.observe(el.current);
    }

    return () => {
      for (const el of elements) {
        resizeObserver.unobserve(el.current);
      }
    }

  }, [])
}

export default useResizeObserver;
