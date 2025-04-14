import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'
import UserCard from './components/UserCard'
import photoDD from './assets/photoDD.jpg'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <UserCard name="Devansh Dwivedi" imgP={photoDD} style={{"border-radius":"10px"}}/>
      <UserCard name="Devid" imgP={photoDD}/>
      <UserCard name="DD" imgP={photoDD}/>
    </div>
  )
}

export default App
