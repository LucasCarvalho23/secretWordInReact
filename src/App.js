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

const guessesQty = 3

const App = () => {

  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])
  const [guessedLetters, setGessedLetters] = useState([])
  const [guesses, setGesses] = useState(guessesQty)
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
  const verifyLetter = (letter)=> {
    const normalizedLetter = letter.toLowerCase()

    if (guessedLetters.includes(normalizedLetter) || wrongLetters.includes(normalizedLetter)) {
      return
    }

    if (letters.includes(normalizedLetter)) {
      setGessedLetters((actualGuessedLetters) => [
        ...actualGuessedLetters,
        normalizedLetter
      ])
    } else {
      setWrongLetters((actualWrongLetters) => [
        ...actualWrongLetters,
        normalizedLetter
      ])
      setGesses((actualGuesses) => actualGuesses-1)
    }  
  }

  const clearLetterStates = ()=> {
    setGessedLetters([])
    setWrongLetters([])
  }

  useEffect( ()=> {
    if (guesses <= 0) {
      clearLetterStates()
      setGameStage(stages[2].name)
    }
  }, [guesses])   

  const retry = ()=> {
    setScore(0)
    setGesses(guessesQty)
    setGameStage(stages[0].name)
  }

  return (
    <div className="App">
      {gameStage === 'start' && <StartScreen startGame={startGame}/>}
      {gameStage === 'game' && <GameScreen verifyLetter={verifyLetter} pickedWord={pickedWord} pickedCategory={pickedCategory} letters={letters} guessedLetters={guessedLetters} guessed={guesses} wrongLetters={wrongLetters} score={score}/>}
      {gameStage === 'end' && <EndScreen retry={retry}/>}
    </div>
  )
}

export default App