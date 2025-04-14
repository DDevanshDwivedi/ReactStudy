import React, {useState} from 'react'
import './App.css'
import Card from './components/card'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)
  function hadleClick(){
    setCount(count+1);
  }
  return (
    <>
      <Button hadleClick={hadleClick} text="Click me">
        <h1>{count}</h1>
      </Button>
      <Card name="Devansh Dwivedi">
        <h1>This is Devansh Dwivedi</h1>
        <p>Learning React </p>
        <p>will complete it soon</p>
      </Card>
      <Card children="This is Devansh">
        This is also children
      </Card>
    </>
  )
}

export default App
