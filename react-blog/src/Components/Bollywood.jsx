import React from 'react'
import Data from '../Data'

const Bollywood = () => {
  const Bollywood = Data.filter((item) => item.category === 'Bollywood')
  return (
    <div>{Bollywood.map((bollydata) => (
      <>
      <h1>{Bollywood.tittlw}</h1>
      <img src={bollydata.img_url}/>
      </>
    ))}
    </div>
  )
}

export default Bollywood