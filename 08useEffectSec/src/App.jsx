import { useState } from 'react'
import './App.css'
import LoggerComponent from './components/LoggerComponent'
import TimerComponent from './components/TimerComponent'
import DataFetcher from './components/DataFetcher'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      {/* <LoggerComponent/> */}
      {/* <TimerComponent/> */}
      <DataFetcher/>
    </div>
  )
}

export default App
