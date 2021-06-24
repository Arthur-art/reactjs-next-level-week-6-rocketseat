import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

export const App = ({text}:any)=>{
    const [number, setNumber] = useState(0);

    const handleNumber = ()=>{
        setNumber((prev)=>(prev+1))
    }
    useEffect(()=>{
        if(number>9){
            alert("O limite é 10")
        }
    },[number])

    return (
        <>
            <h1>{text || "Hello World" }</h1>
            <button onClick={()=>handleNumber()}>{number}</button>
        </>
    )
}