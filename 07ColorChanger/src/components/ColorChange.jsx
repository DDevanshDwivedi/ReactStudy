import React from "react";
import './ColorChange.css'
const ColorChange=({onChangeColor})=>{
    return (
        <button onClick={e=>{e.stopPropagation();onChangeColor();}}>
            Change Color
        </button>
    )
}

export default ColorChange;