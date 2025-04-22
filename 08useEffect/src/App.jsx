import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);
  // useEffect(()=>{ 
  //   // Variation 1
  //   alert("I will render on every time");
  // })
  // useEffect(() => {
  //   // variation 2
  //   alert("i will run only 1st render")
  //   },[]
  // );
  // useEffect(()=>{
  //   //variation 3 
  //   alert("when dep value is updated");
  // },[count])
  // useEffect(()=>{
  //   //variation 4 multiple dep and anyone changed it will run 
  //   alert("Value of total/ count is changed/updated");
  // },[count,total]);
  useEffect(()=>{
    alert("count is updated ")
    return ()=>{alert("count is unmoundet from ui")}
  },[count]);
  return (
    <div>
      <button onClick={()=>{setCount(count+1)}}>Click time count {count}</button> <br />
      <br />
      <button onClick={()=>{setTotal(total+1)}}>Click time total {total}</button>
    </div>
  )
}

export default App
