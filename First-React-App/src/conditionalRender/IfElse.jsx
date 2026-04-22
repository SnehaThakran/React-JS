import React from 'react'

const IfElse = () => {
    const age=19;
    let msg;
    if(age>18){
        msg="you can watch Dhurandhar"
    }
    else{
        msg="Watch POGO"
    }
  return (<> 
    <div>IfElse</div>
    <h2>{msg}</h2>
    </>
  )
}

export default IfElse