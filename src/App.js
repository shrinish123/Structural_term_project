import React from 'react';
import ValuesComp from './ValuesComp'
import diagram from './images/Structure-2.jpg'
import './App.css'

function App() {
  return (
    <div className="App">
      <ValuesComp/>
      <img className='img' src={diagram}/>
      
    </div>
  );
}

export default App;
