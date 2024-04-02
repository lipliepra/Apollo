import { useEffect } from 'react';

import { TFunc } from '../types';

export const useDisableScroll: TFunc<[boolean]> = (isDisabledScroll) => {
  useEffect(() => {
    if (isDisabledScroll) {
      document.body.classList.add('scroll-hidden');
    } else {
      document.body.classList.remove('scroll-hidden');

      if (!document.body.classList.length) {
          document.body.removeAttribute('class');
      }
    }
  }, [isDisabledScroll]);
};
