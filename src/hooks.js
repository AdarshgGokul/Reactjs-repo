import React, { useState } from "react";

function Hooks(){
        let [color,setColor]=useState('red')
        let [number,setNumber]=useState(10)
        let [name,setName]=useState('')


        function changeColor(){
            setColor(name)
        }
        return(
            <>
            <h1 style={{color:`${color}`}}>Hello</h1>
            <input type="text" onChange={(e)=>setName(e.target.value)}/>
            <button onClick={()=>changeColor(name)}>Apply</button>






            <h1>{number}</h1>
            <button onClick={()=>setNumber(number + 1)}>Increase</button>
            <button onClick={()=>setNumber(number - 1)}>decrease</button>
            <button onClick={()=>setNumber(0)}>Reset</button>
            </>
        )

}
export default Hooks
