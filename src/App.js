import { useState } from 'react';
import Escena from './components/escena/Escena.js';
import Sentences from './Sentences';
import PreviousButton from './components/PreviousButton';
import NextButton from './components/NextButton';
import Home from './components/Home.js'

const App = () => {

  {/* Exercici 5 - Sprint 6 --> iniciem l'app a false per ensenyar la pàgina de benvinguda */ }
  const [openApp, setOpenApp] = useState(false);

  {/* Exercici 4 - Sprint 6 --> iniciem l'app amb la primera frase "pintada */}
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);

  const prevClick = () => {
    setCurrentSentenceIndex(prevIndex => Math.max(prevIndex - 1, 0));
  };

  const nextClick = () => {
    setCurrentSentenceIndex(prevIndex => Math.min(prevIndex + 1, Sentences.length - 1));
  };

  {/* Exercici 5 - Sprint 6 --> el render condicional per ensenyar la pantalla de benvinguda */}
  const startClick = () => {
    setOpenApp(true);
  };

  if (openApp === false) {
    return <Home onClick = {startClick} />;
  }

  return (
    <div>
      <PreviousButton onClick={prevClick} />
      <NextButton onClick={nextClick} />
      {/* Exercicis 2 i 4 - Sprint 6 -> ús de map per a mostrar totes les frases, i isSelected per pintar la "triada" */}
      {Sentences.map((sentence, index) => (
        <Escena
          key={index.id}
          sentences={sentence}
          isSelected={index === currentSentenceIndex}
        />
      ))}
    </div>
  );
};

export default App;
