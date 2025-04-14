import React, { useState } from "react";
import './Counter.css'
const Counter=()=>{
    const [count , setCount]=useState(1);
    
    return (
        <div className="counter-container">
            <p id="para">You have clicked {count} times</p>
            <button id="btn" onClick={()=>{
                setCount(count+1)
            }}>click me</button>
        </div>
    )
}

export default Counter;