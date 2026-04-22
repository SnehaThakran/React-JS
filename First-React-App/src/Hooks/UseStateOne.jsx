import React, { useState } from 'react'

const UseStateOne = () => {
        const[count,setCount]=useState(0);
        console.log(count);
        
        function increment(){
            setCount(count+1);
        }
        function decrement(){
            setCount(count-1);
        }
        function reset(){
            setCount(0);
        }
  return (
    <>
    <div>UseStateOne</div>
    <h1>Count:{count}</h1>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
    <button onClick={reset}>reset</button>
    </>
  )
}

export default UseStateOne