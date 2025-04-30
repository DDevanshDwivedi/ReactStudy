import { useCallback, useState } from 'react'
import ChildComponent from './components/childComponent'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleClick = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);
  return (
    <>
      <div>
        count : {count}
      </div>
      <br />
      <div>
        <button onClick={handleClick}>
          Increment
        </button>
      </div>
      <br />
      <div>
      <ChildComponent buttonName="Click me" handleClick={handleClick}></ChildComponent>
      </div>
    </>
  )
}

export default App
