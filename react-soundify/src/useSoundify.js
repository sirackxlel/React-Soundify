    // src/useSoundify.js

import { useEffect, useRef } from 'react';
import { Howl } from 'howler';
import soundMap from './soundMap';

/**
 * useSoundify
 * @param {string} name - Nombre del sonido por defecto ('click', 'success', etc.)
 * @param {object} options - Opciones opcionales para Howl (loop, volume, etc.)
 * @returns {function} play() - Función para reproducir el sonido
 */
const useSoundify = (name = 'click', options = {}) => {
  const soundRef = useRef(null);

  useEffect(() => {
    const soundUrl = soundMap[name];

    if (!soundUrl) {
      console.warn(`❌ Sonido "${name}" no encontrado en soundMap.js`);
      return;
    }

    soundRef.current = new Howl({
      src: [soundUrl],
      ...options,
    });

    return () => {
      soundRef.current?.unload();
    };
  }, [name]);

  const play = () => {
    soundRef.current?.play();
  };

  return play;
};

export default useSoundify;
