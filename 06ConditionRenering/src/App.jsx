import { useState } from 'react'
import './App.css'
import LogoutBtn from './components/LogoutBtn'
import LoginBtn from './components/LoginBtn'

function App() {
  const [isLogged, setIsLogged] = useState(true)

  return (

    <div>
      {isLogged 
        ? <LogoutBtn onLogout={() => setIsLogged(false)} /> 
        : <LoginBtn onLogin={() => setIsLogged(true)} />}
    </div>
  )
}

export default App
