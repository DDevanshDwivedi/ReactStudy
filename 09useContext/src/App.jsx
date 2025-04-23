import { useState,useContext } from 'react'
import './App.css'
import ChildA from './components/ChildA'
import { createContext } from 'react';

const ThemeContext =createContext();
const UserContext= createContext();
function App() {
  const [user,setUser]=useState({name:'Devansh'});
  const [theme,setTheme]= useState('light');
  return (
    <>
    <UserContext.Provider value={user}>
    <ThemeContext.Provider value={{theme,setTheme}}>
      <div id='container' style={{backgroundColor:theme==='light'?"beige":"black"}}>
        <ChildA></ChildA>
      </div>
    </ThemeContext.Provider>
    </UserContext.Provider>
    </>
  )
}

export default App;
export {ThemeContext};
export {UserContext};