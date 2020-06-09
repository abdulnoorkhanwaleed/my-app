import React from 'react';
import './App.css';
import Dinner from'./dinner.js'

function App() {
  return (
    <div className="App">
      <Dinner></Dinner>
      <Dinner myName="Abdul Noor Khan Waleed" uniName="University Of Lahore "/>
    </div>
  );
}

export default App;
