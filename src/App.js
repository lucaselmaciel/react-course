import P from 'prop-types';
import './App.css';
import { useState } from 'react';


const Button = ({incrementButton}) => {
  return <button onClick={() => incrementButton(10)}>+</button>
}

Button.propTypes = {
  incrementButton: P.func
}

function App() {
  const [counter, setCounter] = useState(0);
  const incrementButton = (increment) => {
    setCounter(counter + increment);
  }

  return (
    <div className="App">
      <p>Teste 3</p>
      <h1>Contador: {counter}</h1>
      <Button incrementButton={incrementButton} />
    </div>
  );
}

export default App;
