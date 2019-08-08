import React from 'react';
import './App.css';
import ReactForm from './ReactForm';

const input = [
  { id: 'name', type: 'text', label: 'Name' },
  { id: 'dob', type: 'date', label: 'DOB' },
  { id: 'gender', type: 'gender', label: 'Gender' },
  { id: 'contact', type: 'contact', label: 'Contact' },
];

function App() {
  return (
    <div className="App">
      <ReactForm
        input={JSON.stringify(input)}
        output={data => window.alert(JSON.stringify(data))}
      />
    </div>
  );
}

export default App;
