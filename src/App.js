import React from 'react';
import './App.css';
import ReactForm from './ReactForm';

let input = [
  { id: "name", type: "textForm", label: "Name" },
  // { id: "dob", type: "textForm", label: "DOB" },
  // { id: "gender", type: "textForm", label: "Gender" },
]

function App() {
  return (
    <div className="App">
      <ReactForm input={input} output={data => window.alert(data)}/>
    </div>
  );
}

export default App;
