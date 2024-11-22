import React from 'react'
import "./EndScreen.css"

const EndScreen = ({retry}) => {
  return (
    <div className='end'>
      <h1>Game Over</h1>
      <button onClick={retry}>Jogar novamente</button>
      </div>
  )
}

export default EndScreen