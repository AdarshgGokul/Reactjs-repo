import React, { useEffect, useState } from 'react'

function Hook2() {
    const [count, setCount] = useState(0)
    console.log('Before Render')
    useEffect(()=>{
        console.log("Render")
    })
  return (
    <div>
        <h1>{count}</h1>

    <button onClick={()=> setCount(count+1)}>Increase</button>
    </div>
  )
}

export default Hook2