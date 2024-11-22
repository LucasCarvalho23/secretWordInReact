import React from 'react'
import { useCallback, useEffect, useState } from 'react'
import './App.css'
import { wordsList } from './data/words.js'
import StartScreen from './components/StartScreen.js'
import GameScreen from './components/GameScreen.js'
import EndScreen from './components/EndScreen.js'


const stages = [
  {id: 1, name: 'start'},
  {id: 2, name: 'game'},
  {id: 3, name: 'end'},
]

const App = () => {

  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])
  const [guessedLetters, setGessedLetters] = useState([])
  const [guessed, setGessed] = useState(3)
  const [wrongLetters, setWrongLetters] = useState([])
  const [score, setScore] = useState(0)

  const pickWordAndCategory = () => {
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    return {word, category}
  }
  
  const startGame = ()=> {
    const {word, category} = pickWordAndCategory()
    let wordLetters = word.split("")
    wordLetters = wordLetters.map((l) => l.toLowerCase())

    console.log(wordLetters)

    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)

    setGameStage(stages[1].name)
  }
  const verifyLetter = ()=> {
    setGameStage(stages[2].name)
  }
  const retry = ()=> {
    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame}/>}
      {gameStage === 'game' && <GameScreen verifyLetter={verifyLetter} pickedWord={pickedWord} pickedCategory={pickedCategory} letters={letters} guessedLetters={guessedLetters} guessed={guessed} wrongLetters={wrongLetters} score={score}/>}
      {gameStage === 'end' && <EndScreen retry={retry}/>}
    </div>
  )
}

export default App