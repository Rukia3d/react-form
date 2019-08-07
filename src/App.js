import React from 'react';
import './App.css';
import ReactForm from './ReactForm';

let input = [
  { name: "textForm" },
  { dob: "textForm" },
  { gender: "textForm" },
]

function App() {
  return (
    <div className="App">
      <ReactForm input={input} output={data => window.alert(data)}/>
    </div>
  );
}

export default App;
