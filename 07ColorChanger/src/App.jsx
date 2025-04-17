import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ColorChange from './components/ColorChange'

function App() {
  const [clicks, setClicks] = useState(0);
  function handleClickOutside(){
    setClicks(clicks+1);
  }
  function getRandomColor(){
    let r=Math.floor(Math.random() * 256);
    let g=Math.floor(Math.random() * 256);
    let b=Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b} )`;
  }
  function changeColor(){
    let bodyStyle=document.getElementsByClassName('mdiv')[0].style;
    bodyStyle.backgroundColor=getRandomColor();
  }

  return (
    <div className='mdiv' onClick={handleClickOutside}>
      <ColorChange onChangeColor={changeColor}></ColorChange>
      <br/>
      <br />
      <h2>You have click the page {clicks}</h2>
    </div>
  )
}

export default App
