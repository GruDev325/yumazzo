import React from 'react'

export const useOutsideClick = (callback: any) => {
  const ref = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const el = ref?.current;

      if (!el || el.contains(event.target as Node))
        return

      callback();
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);

  return ref;
};
