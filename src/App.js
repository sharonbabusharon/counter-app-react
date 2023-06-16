import {useState} from 'react';
import './App.css';

function App() {
  //creating state
  const[counter,setCounter]=useState(0)
  function increment(){
    setCounter(counter+1)
  }
  function decrement(){
    if(counter!=0){
      setCounter(counter-1 )
    }

  }
  function reset(){
    setCounter(0)
  }
  return (
    <div
    
    style={{
      display:'flex',
      flexDirection:'column',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid black',
      borderRadius:'20px',
      padding:'100px',
      margin: '100px'
    }}

    className="App">
      <header className="App-header">
        <h2 style={{margin:'20px',textAlign:'center',color:'red'}}>Counter App</h2>
        <h1 style={{margin:'20px',textAlign:'center'}}>{counter}</h1>
        <button style={{margin:'10px',padding:'10px',  borderRadius:'20px'}} onClick={increment}>Increment</button>
        <button style={{margin:'10px',padding:'10px',  borderRadius:'20px'}} onClick={decrement}>Decrement</button>
        <button style={{margin:'10px',padding:'10px',  borderRadius:'20px'}} onClick={reset}>Reset</button>
      </header>
    </div>
  );
}

export default App;
