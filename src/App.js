import React from 'react';
import './App.css';
import toast from './components/toast'

let count = 0

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <button onClick={() => {toast('lolly' + ++count)}}>Toast Please!</button>
    </div>
  );
}

export default App;
