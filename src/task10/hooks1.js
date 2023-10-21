import React, { useState } from "react";

function Hooks1() {
    let [number,setNumber]=useState(0)
  return (
   <>
    <h1>{number}</h1>
    <button onClick={()=>setNumber(number + 1)}>Increase</button>
    <button onClick={()=>setNumber(0)}>Reset</button>
    </>
  )
}

export default Hooks1