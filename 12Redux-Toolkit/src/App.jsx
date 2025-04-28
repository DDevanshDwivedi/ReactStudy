import { useState } from 'react'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment,incrementByAmount,reset } from './features/counterSlice';


function App() {
  const [amount,setAmount]=useState(0);
  const count =useSelector((state)=>state.counter.value);
  const dispatch=useDispatch();

  function handleIncrementClick(){
    dispatch(increment());
  }
  function handleDecrementClick(){
    dispatch(decrement());
  }
  function handleResetClick(){
    dispatch(reset());
  }
  function handleIncClick(){
    dispatch(incrementByAmount(amount));
  }
  return (
    <>
      <div className='container'>
        <button onClick={handleIncrementClick}> + </button>  
        <p>Count: {count}</p>
        <button onClick={handleDecrementClick}> - </button>
        <br />
        <button onClick={handleResetClick}> Reset </button>
        <br />
        <br />
        <input type="number" value={amount} name="" id="" onChange={(e)=>setAmount(e.target.value)}/>
        <br />
        <br />
        <button onClick={handleIncClick}>Inc by Amount</button>
      </div>  
    </>
  )
}

export default App
