import React from 'react'

const MulipleJSX = () => {
    const isStudent=true;
  return (
    <>
    <div>MulipleJSX</div>
    {isStudent?(
        <div>
    <h1>Student Dashboard</h1>:<h1>please Enroll to the Program</h1>
    </div>
  ):(
    <div>
        <h1>Guest dashboard</h1>
        <p>please Enroll to the Program </p>
    </div>
  )
}
    </>
  )
}

export default MulipleJSX