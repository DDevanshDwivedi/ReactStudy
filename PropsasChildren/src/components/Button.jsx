import { useState } from "react";
import React from "react";

const Button = (props) => {
    return (
        <div>
            {props.children}
            <button onClick={props.hadleClick}>
            {props.text}
        </button>
        </div>
    )
}

export default Button;
