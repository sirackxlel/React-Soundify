// src/components/SoundButton.jsx
import React, { useState } from 'react';
import useSoundifyAI from '../useSoundifyAI';

const SoundButton = ({ prompt, children }) => {
  const { generarSonido, audioUrl, loading } = useSoundifyAI();
  const [audio] = useState(new Audio());

  const handleClick = async () => {
    await generarSonido(prompt);
  };

  const playAudio = () => {
    if (audioUrl) {
      audio.src = audioUrl;
      audio.play();
    }
  };

  return (
    <div>
      <button onClick={handleClick} disabled={loading}>
        {loading ? 'Cargando...' : children}
      </button>
      {audioUrl && <button onClick={playAudio}>▶️ Reproducir</button>}
    </div>
  );
};

export default SoundButton;
