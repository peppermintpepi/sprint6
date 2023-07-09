import { useState } from 'react';
import Escena from './components/escena/Escena.js';
import Sentences from './Sentences';
import PreviousButton from './components/PreviousButton';
import NextButton from './components/NextButton';

const App = () => {
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);

  const prevClick = () => {
    setCurrentSentenceIndex(prevIndex => Math.max(prevIndex - 1, 0));
  };

  const nextClick = () => {
    setCurrentSentenceIndex(prevIndex => Math.min(prevIndex + 1, Sentences.length - 1));
  };

  const currentSentence = Sentences[currentSentenceIndex];

  return (
    <div>
      <PreviousButton onClick={prevClick} />
      <NextButton onClick={nextClick} />
      {/* Exercicis 2 i 4 - Sprint 6 */}
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
