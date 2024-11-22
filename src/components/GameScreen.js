import React from 'react'
import "./GameScreen.css"

const GameScreen = ({verifyLetter}) => {
  return (
    <div className='game'>
      <p className='points'><span>Pontuação: 000</span></p>
      <h1>Advinhe a palavra</h1>
      <h3 className='tip'>Dica da palavra: <span>Dica...</span></h3>
      <div className="wordContainer">
        <span className='letter'>A</span>
        <span className="blankSquare"></span>
      </div>
      <div className="letterContainer">
        <p>Tente advinhar uma letra da palavra:</p>
        <form>
          <input type="text" name="letter" maxLength="1" required/>
          <button>Jogar</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Letras já utilizadas:         
          <span> a,</span>
          <span>b,</span>
        </p>
      </div>
    </div>
  )
}

export default GameScreen