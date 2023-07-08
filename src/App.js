import './App.css';
import Escena from './components/escena/Escena.js';
import Sentences from './Sentences';
import StyledBorder from './StyledProps.js';

function App() {
  return (
    <div className="App">
      {Sentences.map((line) => (
        <StyledBorder key = {line.id }>
          <Escena sentences = {line} />
        </StyledBorder>
      ))}
    </div>
  );
}

export default App;
