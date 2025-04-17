import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  function handleClick(){
    alert("I am Clicked")
  }
  return (
    <div>
      <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default App
