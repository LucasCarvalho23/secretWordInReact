import React from 'react'
import "./GameScreen.css"

const GameScreen = ({verifyLetter,pickedWord,pickedCategory,letters,guessedLetters,guessed,wrongLetters,score}) => {
  return (
    <div className='game'>
      <p className='points'><span>Pontuação: {score}</span></p>
      <h1>Advinhe a palavra</h1>
      <h3 className='tip'>Dica da palavra: <span>{pickedCategory}</span></h3>
      <p className='tryError'>Você ainda tem {guessed} tentativa(s).</p>
      <div className="wordContainer">
        {letters.map( (letter, i)=> (
          guessedLetters.includes(letter) ? (
            <span key={i} className="letter">{letter}</span>
          ) : (
            <span key={i} className="blankSquare"></span>
          )
        ))}
      </div>
      <div className="letterContainer">
        <p>Tente advinhar uma letra da palavra:</p>
        <form>
          <input type="text" name="letter" maxLength="1" required/>
          <button>Jogar</button>
        </form>
      </div>
      <div className="wrongLettersContainer">
        <p>Letras já utilizadas:</p>
          {wrongLetters.map( (letter, i)=> (
            <span key={i}>{letter}, </span>
          ))}
      </div>
    </div>
  )
}

export default GameScreen