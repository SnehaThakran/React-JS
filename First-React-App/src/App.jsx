import React from 'react'

import IfElse from './conditionalRender/IfElse'
import ParentComp from './propsPassing/ParentComp'
import Ternary from './conditionalRender/Ternary'
import AndOperator from './conditionalRender/AndOperator'
import MulipleJSX from './conditionalRender/MulipleJSX'
import UseStateOne from './Hooks/UseStateOne'
import ShowHide from './Hooks/ShowHide'
import DarkLight from './Hooks/DarkLight'
import "./App.css"
const App = () => {
  
  return (
    <div>
      <ParentComp/>
      <IfElse/>
      <Ternary/>
      <AndOperator/>
      <MulipleJSX/>
      <UseStateOne/>
       <ShowHide/>
       <DarkLight/>
    </div>
  )
}

export default App