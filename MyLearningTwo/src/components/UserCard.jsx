import React from "react";
import "./UserCard.css"
import photoDD from '../assets/photoDD.jpg'
const UserCard =(props)=>{
    return (
        <div className="user-container" style={props.style}>
            <p id="user-name">{props.name}</p>
            <img id="user-img" src={props.imgP} alt="Devansh" />
            {/* without props */}
            {/* <img id="user-img" src={photoDD} alt="Devansh" />  */}
            <p>Description of Devansh Dwivedi</p>
        </div>
    )
}

export default UserCard;