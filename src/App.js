import React from 'react';
import './App.css';
import ReactForm from './ReactForm';

// The incoming form schema
const input = JSON.stringify([
  { id: 'name', type: 'name', label: 'Name' },
  { id: 'dob', type: 'date', label: 'DOB' },
  { id: 'gender', type: 'gender', label: 'Gender' },
  { id: 'contact', type: 'contact', label: 'Contacts' },
]);

function App() {
  return (
    <div className="App">
      <h1>Form Example</h1>
      <ReactForm
        input={input}
        output={data => window.alert(JSON.stringify(data))}
      />
    </div>
  );
}

export default App;
