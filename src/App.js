import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';


function App() {
  let [count, setCount] = useState(0)
  let [Morning, setMorning] = useState(true)
  return (
  <div>
    <div>
   <h1> vlaue = {count} </h1>

   <button onClick = {()=> setCount(count+1)}> Add </button>
   </div>
   <hr></hr>

   <div className={`secondbox ${Morning ? 'secondbox' : 'night'}`}>
  <h2> Its {Morning? 'Morning' : 'Night'} </h2>

  <button onClick = {() => setMorning(!Morning) }> Change time</button>  
   </div>
 </div>

  );
}

export default App;
