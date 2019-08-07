import React from 'react';
import './App.css';
import ReactForm from './ReactForm';

let input = [
  { id: "name", type: "text", label: "Name" },
  { id: "dob", type: "date", label: "DOB" },
  { id: "gender", type: "gender", label: "Gender" },
]

function App() {
  return (
    <div className="App">
      <ReactForm input={JSON.stringify(input)} output={data => window.alert(data)}/>
    </div>
  );
}

export default App;
