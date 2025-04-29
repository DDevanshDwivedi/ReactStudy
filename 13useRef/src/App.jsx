import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react';
import { useRef } from 'react';

function App() {
  const [count, setCount] = useState(0);
  let val=useRef(0);
  useEffect(()=>{
    console.log("Component rendered")
    console.log("value of val : "+val.current);
  });

  function handleclick(){
    val.current=val.current+1;
    setCount(count+1)
  }
  let btnRef=useRef();
  function changeColor(){
    btnRef.current.style.backgroundColor="red"
  }
  return (
    <>
      <div>
        <button ref={btnRef}  onClick={handleclick}>Increment </button>
        <br />
        <br />
        <button onClick={changeColor}>Change color of 1st button</button>
        <p>Count : {count}</p>
      </div>
    </>
  )
}

export default App
