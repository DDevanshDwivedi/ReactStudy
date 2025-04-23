import React ,{useState,useContext} from "react";
import { ThemeContext, UserContext } from "../App";

const ChildC=()=>{
    const {theme, setTheme}=useContext(ThemeContext);
    const user=useContext(UserContext);
    function toggleTheme(){
        if(theme==='light')
            setTheme('dark');
        else 
            setTheme('light');
    }
    return (
        <div>
            <h1>Name: {user.name}</h1>
            <br />
            <button onClick={toggleTheme}>Change Theme</button>
        </div>
    )
}

export default ChildC;