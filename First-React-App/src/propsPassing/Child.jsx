import React from 'react'

const Child = ({name,alert}) => {
    return (
        <>
        <div>Child</div>
        <h1>Rendered in Child Component:{name}</h1>
        <button onClick= {alert}>Click</button>
        </>
    )
}

export default Child 