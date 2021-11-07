import './App.css';
import {useState} from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  const [state, setState] = useState({
    title: 'Cчетчик',
    data: Date.now()
  })

  function increment() {
    setCounter(counter + 1)
  }

  function decrement() {
    setCounter(counter - 1)
  }


  return (
    <div className="App">
      <h1>Count {counter}</h1>
      <button onClick={increment}>Add</button>
      <button onClick={decrement}>Remove</button>
      <button onClick={() => setState({title: 'Новое название'})}>Изменить название</button>

      <pre>{JSON.stringify(state, null, 2)}</pre>
    </div>
  );
}

export default App;
