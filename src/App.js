import './App.css';
import Escena from './components/escena/Escena.js';
import Sentences from './Sentences';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      {Sentences.map((line) => (
        <Escena
        key = {line.id} sentences = {line}
        />
      ))}
    </div>
  );
}

export default App;
