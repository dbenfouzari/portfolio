import { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';

import TYPING_ELEMENTS from './constants';

const useTyping = <T extends HTMLElement>() => {
  // Create reference to store the DOM element containing the animation.
  const el = useRef<T>(null);
  // Create reference to store the Typed instance itself.
  const typed = useRef<Typed | null>(null);

  const [imageUrl, setImageUrl] = useState(TYPING_ELEMENTS.map((elm) => elm.image)[0]);
  const [color, setColor] = useState(TYPING_ELEMENTS.map((elm) => elm.color)[0]);

  useEffect(() => {
    const options = {
      // stringsElement: '#typed-strings',
      strings: TYPING_ELEMENTS.map((elm) => elm.text),
      typeSpeed: 40,
      backSpeed: 20,
      loop: true,
      smartBackspace: false,
      loopCount: Infinity,
      // This is used to hide #keep div.
      // `#keep` exists if user disables his JavaScript, and to allow SEO !
      onBegin: () => {
        const keepElement = document.getElementById('keep');
        if (keepElement) keepElement.style.display = 'none';
      },
      preStringTyped: (arrayPos: number) => {
        setImageUrl(TYPING_ELEMENTS.map((elm) => elm.image)[arrayPos]);
        setColor(TYPING_ELEMENTS.map((elm) => elm.color)[arrayPos]);
      },
    };

    if (el.current) {
      typed.current = new Typed(el.current, options);
    }

    return () => {
      typed.current?.destroy();
    };
  }, []);

  return [el, imageUrl, color] as const;
};

export default useTyping;
