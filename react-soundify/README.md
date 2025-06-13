uso tipico :
import { SoundifyProvider, SoundButton } from 'react-soundify-ai';

function App() {
  return (
    <SoundifyProvider apiKey="TU_API_KEY">
      <SoundButton prompt="perro ladrando">Generar ladrido</SoundButton>
    </SoundifyProvider>
  );
}
