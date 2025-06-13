// src/SoundifyProvider.js
import React, { createContext, useContext } from 'react';

const SoundifyContext = createContext();

export const SoundifyProvider = ({ apiKey, children }) => {
  return (
    <SoundifyContext.Provider value={{ apiKey }}>
      {children}
    </SoundifyContext.Provider>
  );
};

export const useSoundifyContext = () => useContext(SoundifyContext);
