import { useState } from 'react'
import './App.css'
import Card from './components/card'

function App() {
  //creat state
  //manage state 
  //change state
  //sabhi child me state ko sync 
  const [name, setName] = useState('');

  return (
    <>
    <p>On Parent: {name}</p>
      <Card title="card1" name={name} setName={setName}/>
      <Card title="card2"name={name} setName={setName}/>
    </>
  )
}

export default App
