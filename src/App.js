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

  {/* Exercici 6 - Sprint 6 --> afegir el fons, per això cal actualitzar el prevClick i el newtClick amb les dades de les imatges */ }
  const [currentBackground, setCurrentBackground] =useState(0);

  const prevClick = () => {
    const prevIndex = Math.max(currentSentenceIndex -1, 0);
    setCurrentSentenceIndex(prevIndex);
    setCurrentBackground(Sentences[prevIndex].bgPicture);
  };

  const nextClick = () => {
    const nextIndex = Math.min(currentSentenceIndex + 1, Sentences.length - 1);
    setCurrentSentenceIndex(nextIndex);
    setCurrentBackground(Sentences[nextIndex].bgPicture);
  };

  {/* Exercici 5 - Sprint 6 --> el render condicional per ensenyar la pantalla de benvinguda */}
  const startClick = () => {
    setOpenApp(true);
  };

  if (openApp === false) {
    return <Home onClick = {startClick} />;
  }

  return (
    <div style={{backgroundImage:`url(${currentBackground})`, backgroundSize: 'cover'}}>
      <PreviousButton onClick={prevClick} />
      <NextButton onClick={nextClick} />
      {/* Exercicis 2 i 4 - Sprint 6 -> ús de map per a mostrar totes les frases, i isSelected per pintar la "triada" */}
      {Sentences.map((sentenceObject, index) => (
        <Escena
          key={index}
          sentences={sentenceObject.sentence}
          bgPicture={sentenceObject.bgPicture}
          isSelected={index === currentSentenceIndex}
        />
        ))}
    </div>
  );
};

export default App;
