import './App.css';
import React from 'react'

const { useState } = React;

function App() {
	const [counter, setCounter] = useState(0);

  return (
    <div>
		<p>Counter: { counter }</p>
		<button onClick={() => setCounter(counter + 1)}>Add</button>
    </div>
  );
}


export default App;
