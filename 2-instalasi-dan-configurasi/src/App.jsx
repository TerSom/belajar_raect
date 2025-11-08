import React, { useState } from 'react'
import Header from './component/Header'

function App() {
  const [likes,setLikes] = useState(0)

  function handleClick() {
    setLikes(likes + 1)
  }

  return (
    <>
    <Header/>
    <button onClick={handleClick}>like ({likes})</button>
    </>
  )
}

export default App
