import { useState } from 'react';
import './App.css';

function App() {
  const [num, setNum] = useState(0)

  const Incr = () => {
    setNum(num+1)
  }

  const Decr = () => {
    if(num>0){
      setNum(num-1)
    }
    else{
      alert("Zero Limit Reached!")
    }
  }
  return (
    <div className="main-div">
      <h1>React Counter App</h1>
      <div className='main'>
        <h1>{num}</h1>
        <div className="buttons">
          <button className='item' onClick={Incr}>Increment</button>
          <button className='item' onClick={Decr}>Decrement</button>
        </div>
      </div>
    </div>
  );
}

export default App;
