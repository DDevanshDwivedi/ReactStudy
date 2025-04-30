import React from "react";

const ChildComponent=React.memo(
    (props)=>{
    console.log("Child render")
    return (
        <>
        <button onClick={props.handleClick}>{props.buttonName}</button>
        </>
    )
}
)


export default ChildComponent;