import React ,{useState, useEffect} from "react";

const TimerComponent=()=>{
    const [seconds , setSeconds]=useState(0);
    useEffect(()=>{
        const intervaId=setInterval(()=>{
        console.log("Setinterval executed");
        setSeconds(seconds+1);
        },1000);
        return ()=>{
            console.log("timer is stop");
            clearInterval(intervaId);
        }
    },[]);
    return (
        <div>
            <h1>Seconds:{seconds}</h1>
        </div>
    )
}

export default TimerComponent;