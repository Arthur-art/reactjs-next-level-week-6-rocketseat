import React from 'react'

export const App = ({text}:any)=>{
    return (
        <>
            <h1>{text || "Hello World" }</h1>
        </>
    )
}