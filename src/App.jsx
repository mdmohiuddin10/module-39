import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'

function App() {
  
  function handleClick(){
    alert('button clicked')
  }
  const handleClick2 =() => {
    alert('button2 Clicked')
  }

const addToFive = (num) => {
  alert(num + 5)
}

  return (
    <>
      
      <h1>Vite + React</h1>
      <Friends></Friends>
      <Users></Users>

      <Team></Team>

      <Counter></Counter>
  

      <button onClick={handleClick}>Click Me</button>
      <button onClick={handleClick2}>Click Me</button>
      <button onClick={() =>{alert('third button clicked')}}>Click Me</button>
      <button onClick={() => addToFive(5)}>Click Me</button>
    </>
  )
}

export default App
