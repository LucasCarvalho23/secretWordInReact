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

  const pickWordAndCategory = () => {
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * Object.keys(categories).length)]
    console.log(category);

    const word = Object(words)
    console.log(word[category][Math.floor(Math.random() * word[category].length)]);
    
  }
  
  const startGame = ()=> {
    pickWordAndCategory()
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
      {gameStage === 'game' && <GameScreen verifyLetter={verifyLetter}/>}
      {gameStage === 'end' && <EndScreen retry={retry}/>}
    </div>
  )
}

export default App