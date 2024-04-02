import { useEffect, RefObject } from 'react';

import { TFunc } from '../types';

type Event = MouseEvent | TouchEvent;

export const useClickOutside = <T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handleClickOutside: TFunc<[Event]>,
  isValue = true
) => {
  useEffect(() => {
    const listener = (event: Event) => {
      if (!ref?.current || ref?.current.contains((event?.target as Node) || null)) {
        return;
      }

      if (isValue) handleClickOutside(event);
    };

    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handleClickOutside]);
};
