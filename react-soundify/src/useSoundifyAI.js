// src/useSoundifyAI.js
import { useState } from 'react';
import axios from 'axios';
import { useSoundifyContext } from './SoundifyProvider';

const useSoundifyAI = () => {
  const { apiKey } = useSoundifyContext();
  const [audioUrl, setAudioUrl] = useState(null);
  const [loading, setLoading] = useState(false);

  const generarSonido = async (prompt) => {
    setLoading(true);
    try {
      const response = await axios.post(
        'https://api.elevenlabs.io/v1/sfx/generate',
        { text: prompt },
        {
          headers: { 'xi-api-key': apiKey },
          responseType: 'blob',
        }
      );
      const blob = new Blob([response.data], { type: 'audio/mpeg' });
      const url = URL.createObjectURL(blob);
      setAudioUrl(url);
    } catch (err) {
      console.error('Error generando sonido IA:', err);
      setAudioUrl(null);
    } finally {
      setLoading(false);
    }
  };

  return { generarSonido, audioUrl, loading };
};

export default useSoundifyAI;
