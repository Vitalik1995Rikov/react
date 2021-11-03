import './App.css';
import {useState} from 'react';

function App() {
  const counterState = useState(0);

  return (
    <div className="App">
      <h1>Count</h1>
      <button>Add</button>
      <button>Remove</button>
    </div>
  );
}

export default App;
