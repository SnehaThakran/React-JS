import React from 'react'
import Child from './Child';


const ParentComp = () => {
    const fullname = "Humza";

    function Alert(){
        alert ("Hosla Endhan Badla");
    }

    return (
        <>
        <div>
            <div>ParentComp</div>
            <h1>Rendered in ParentComp Component:-{fullname}</h1>
            <Child name={fullname} alert={Alert}/>
        </div>
        </>
    )
}

export default ParentComp