import React, {useState, useEffect} from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import './wordik.css'
import UpArrowImg from "../images/up_arrow.svg"
import RightArrowImg from "../images/right_arrow.svg"
import DownArrowImg from "../images/down_arrow.svg"
import LeftArrowImg from "../images/left_arrow.svg"

function Square(props) {

  let style = { position: "absolute", width: `${props.size}vmin`, height: `${props.size}vmin`, fontSize: `${props.size * .8}vmin` }

  //Set colors
  if (props.item.goal)
    style.background = "linear-gradient(160deg, rgba(255,255,255,1) 0%, #8f9dd1 75%, #1f64b3 100%)"
  else if (props.item.positionY >= 3 && props.item.positionY <= 5)
    style.backgroundColor = "hsl(180, 84%, 40%)"

  if (props.gameStarted) {
    style.transform = `translate(${props.item.positionX * (props.margin + props.size) + 10}vmin, ${props.item.positionY * (1.5 + props.size) + 10}vmin)`
  } else {
    if (props.item.sideNum === 5)
      style.transform = `translate3d(20vmin, 20vmin, 135vmin)`
  }

  //Pulse color of swapSquare
  if (props.swapSquare.positionX == props.item.positionX && props.swapSquare.positionY == props.item.positionY)
    style.animation = "color_change 500ms infinite alternate"


  const contents = `${props.item.letter}`

  return <div className="square" style={style} onClick={() => props.onClick(props.item)}>
    {contents}
  </div>
}



function CokeZero() {


  const [gameStarted, setStarted] = useState(true)
  const [gameboard, setGameboard] = useState([])
  const [swapStarted, setSwapStarted] = useState(false)
  const [swapSquare, setSwapSquare] = useState({})
  const [goalWords, setGoalWords] = useState(['MAJESTIC', 'SEAMY'])
  const [originalScore, setoriginalScore] = useState(400)
  const [score, setScore] = useState(400)
  const [winner, setWinner] = useState(false)
  const [newGame, setNewGame] = useState(true)
  const [originalGame, setoriginalGame] = useState([])


  useEffect(() => {

    if (newGame) {
      const _gameboard = []
      let _id = 0
      let _score = 40

      let x
      let y

      for (x = 3; x <= 5; x++)
        for (y = 0; y <= 2; y++) {
          _gameboard.push({ goal: false, letter: '', positionX: x, positionY: y, sideNum: 0, id: _id })
          _id++;
        }

      for (x = 0; x <= 2; x++)
        for (y = 3; y <= 5; y++) {
          _gameboard.push({ goal: false, letter: '', positionX: x, positionY: y, sideNum: 1, id: _id })
          _id++;
        }

      for (x = 3; x <= 5; x++)
        for (y = 3; y <= 5; y++) {
          _gameboard.push({ goal: false, letter: '', positionX: x, positionY: y, sideNum: 2, id: _id })
          _id++;
        }

      for (x = 6; x <= 8; x++)
        for (y = 3; y <= 5; y++) {
          _gameboard.push({ goal: false, letter: '', positionX: x, positionY: y, sideNum: 3, id: _id })
          _id++;
        }

      for (x = 3; x <= 5; x++)
        for (y = 6; y <= 8; y++) {
          _gameboard.push({ goal: false, letter: '', positionX: x, positionY: y, sideNum: 4, id: _id })
          _id++;
        }

      for (x = 3; x <= 5; x++)
        for (y = 9; y <= 11; y++) {
          _gameboard.push({ goal: false, letter: '', positionX: x, positionY: y, sideNum: 5, id: _id })
          _id++;
        }

      //Fill in the goal words
      let spot = 0
      goalWords.forEach(item => {
        for (let k = 0; k < item.length; k++) {
          let finished = false
          while (!finished) {

            spot = Math.floor(Math.random() * 54, 1)

            if (_gameboard[spot].goal === false) {
              _gameboard[spot].goal = true
              _gameboard[spot].letter = item[k]
              _score += (Math.abs(_gameboard[spot].positionX - 3)) * 10
              _score += (Math.abs(_gameboard[spot].positionY - 3)) * 10
              finished = true
            }

          }
        }
        console.log('Allocation for ' + item + ':' + _score)

      })

      setGameboard(_gameboard)
      setoriginalGame(_gameboard)
      setoriginalScore(_score)
      setScore(_score)
    }
    else
      setGameboard(originalGame)

    setWinner(false)

  }, []);

  function handleClick(chosenSquare) {
    let holdingPen = { goal: false, letter: '', positionX: 0, positionY: 0, sideNum: 0, id: 0 }
    if (swapStarted) {
      //put the receiving square somewhere safe
      holdingPen = { ...chosenSquare }

      //now open the gameboard and ...
      const _gameboard = [...gameboard]

      setGameboard(_gameboard.map(square => {
        //find the receiving Square
        if (square.positionX === holdingPen.positionX && square.positionY === holdingPen.positionY) {
          return {
            goal: swapSquare.goal,
            letter: swapSquare.letter,
            positionX: square.positionX,
            positionY: square.positionY,
            sideNum: square.sideNum,
            id: swapSquare.id
          }
        }
        //find the swapSquare
        if (square.positionX === swapSquare.positionX && square.positionY === swapSquare.positionY) {
          return {
            goal: holdingPen.goal,
            letter: holdingPen.letter,
            positionX: square.positionX,
            positionY: square.positionY,
            sideNum: square.sideNum,
            id: holdingPen.id
          }
        }
        else {
          return square
        }

      }))

      //Swap them
      setSwapSquare({ goal: false, letter: '', positionX: 0, positionY: 0, sideNum: 0, id: 0 })
      setSwapStarted(false)
      setScore(score - 100)
    } else {
      //If this is the beginning of the swap
      setSwapSquare({ ...chosenSquare })
      setSwapStarted(true)
    }
  }

  function randomizeSides() {
    const _gameboard = []

    const counters = [9, 9, 9, 9, 9, 9]

    for (let i = 0; i < 54; i++) {
      let _item = { ...gameboard[i] }
      let success = false
      while (!success) {
        let nextPick = Math.floor(Math.random() * 6, 1)
        if (counters[nextPick] > 0) {
          counters[nextPick] = counters[nextPick] - 1
          _item.sideNum = nextPick
          success = true
        }
      }
      _gameboard.push(_item)
    }

    setGameboard(_gameboard)
  }

  function handleUp(column) {

    if (score > 0) {
      const _gameboard = [...gameboard]

      setScore(score - 10)

      setGameboard(_gameboard.map(item => {

        let _item = { ...item }
        if (_item.positionX === column) {
          _item.positionY = item.positionY - 1
          if (_item.positionY < 0)
            _item.positionY = 11

        }
        return _item
      }))
    }
  }

  function handleDown(column) {
    if (score > 0) {
      const _gameboard = [...gameboard]

      setScore(score - 10)

      setGameboard(_gameboard.map(item => {

        let _item = { ...item }
        if (_item.positionX === column) {
          _item.positionY = item.positionY + 1
          if (_item.positionY > 11)
            _item.positionY = 0

        }
        return _item
      }))
    }
  }

  function handleRight(row) {
    if (score > 0) {
      const _gameboard = [...gameboard]

      setScore(score - 10)

      setGameboard(_gameboard.map(item => {

        let _item = { ...item }
        if (_item.positionY === row) {
          _item.positionX = item.positionX + 1
          if (_item.positionX > 8)
            _item.positionX = 0

        }
        return _item
      }))
    }
  }

  function handleLeft(row) {
    if (score > 0) {
      const _gameboard = [...gameboard]

      setScore(score - 10)

      setGameboard(_gameboard.map(item => {

        let _item = { ...item }
        if (_item.positionY === row) {
          _item.positionX = item.positionX - 1
          if (_item.positionX < 0)
            _item.positionX = 8

        }
        return _item
      }))
    }
  }

  const size = 5
  const margin = 1.2
  const topEdge = 15
  const leftEdge = 10

  let j = 0


  let possibleWinner = goalWords.length

  //Test for possible winner, but only if there is not already winner, so as not to change the state unnecessarily
  if (!winner) {
    //Once for each of the goal rows
    for (let q = 3; q <= 5; q++) {
      let candidateWord = ''
      gameboard
        //Sort it out so we can read the letters by their current position
        .sort((a, b) => a.positionY - b.positionY)
        .sort((a, b) => a.positionX - b.positionX)
        //Loop to find the letters on row "q" and all the way across
        .map(item => {
          if (item.positionY === q && (item.positionX >= 0 && item.positionX <= 11))
          //If this is the row in question, start building the candidate word
          candidateWord = candidateWord + item.letter

          //We test once per letter
          goalWords.forEach(item => {
            console.log(candidateWord)
            if (candidateWord === item) {
              console.log('Winner!')
              setWinner(true)
            }
          })
        })
    }
  }
  /*
    //Assemble an array of candidate letter groups
    let candidates = []
  
    for (let k = 0; k <= 11; k++)
      candidates.push(gameboard.filter((a, b) => {
        return a.positionY === k
      }).sort((a, b) => {
        return a.positionY - b.positionY
      }).map(item => {
        return item.letter
      }))
    ////////////////////////////////////////////////////////////////////////////////////////////////
  
    const potentialWords = candidates.map(item => {
      if(item.length === 3)
        return item[0].toLowerCase() + item[1].toLowerCase() + item[2].toLowerCase()
      else
        return item[0].toLowerCase() + item[1].toLowerCase() + item[2].toLowerCase() + item[3].toLowerCase()
    })
  
    potentialWords.push()
  
    const words = potentialWords.map(candidate => {
      let found = false
      wordList.forEach(word => {
        if(candidate === word) {
          found = true
          console.log('Boogity!: ' + candidate)
        }
      })
    })
  */

  function tryAgain() {
    setScore(originalScore)
    setGameboard(originalGame)
    setWinner(false)
  }

  let gameStyle = {}

  //change background color on win condition
  if (winner)
    gameStyle.background = "linear-gradient(315deg, rgba(255,148,114,1) 0%, rgba(248,81,37,1) 100%)"
  else if (score <= 0)
    gameStyle.background = "linear-gradient(180deg, rgba(0,0,0,1) 0%, rgba(255,255,255,1) 100%)"
  else
    gameStyle.background = "linear-gradient(315deg, rgba(49, 47, 84, 1) 0%, rgba(9, 99, 121, 1) 35%, rgba(0, 255, 99, 1) 100%)"


  return (
    <div className="game" style={gameStyle}>
      <div className="goback">Go back</div>
      <div className="title">WORDIK</div>
      <div className="tryAgain" onClick={() => tryAgain()} >Try Again</div>
      {gameboard.map(item =>
        <Square
          item={item}
          gameStarted={gameStarted}
          key={item.id}
          size={size}
          margin={margin}
          leftEdge={leftEdge}
          topEdge={topEdge}
          onClick={() => handleClick(item)}
          swapSquare={swapSquare}
        />)
      }
      <div className="arrow" onClick={() => handleUp(3)} style={{ transform: `translate(${(size + margin) * 3 + leftEdge + 1}vmin,${(size + margin) * 12 + 14}vmin)` }}><img height={`${size * 10}vmin`} alt="Up arrow, column 3" src={UpArrowImg} /></div>
      <div className="arrow" onClick={() => handleUp(4)} style={{ transform: `translate(${(size + margin) * 4 + leftEdge + 1}vmin,${(size + margin) * 12 + 14}vmin)` }}><img height={`${size * 10}vmin`} alt="Up arrow, column 4" src={UpArrowImg} /></div>
      <div className="arrow" onClick={() => handleUp(5)} style={{ transform: `translate(${(size + margin) * 5 + leftEdge + 1}vmin,${(size + margin) * 12 + 14}vmin)` }}><img height={`${size * 10}vmin`} alt="Up arrow, column 5" src={UpArrowImg} /></div>

      <div onClick={() => handleDown(3)} style={{ position: "absolute", transform: `translate(${(size + margin) * 3 + leftEdge + 1}vmin,${(size + margin) * 13 + 14}vmin)` }}><img height={`${size * 10}vmin`} src={DownArrowImg} /></div>
      <div onClick={() => handleDown(4)} style={{ position: "absolute", transform: `translate(${(size + margin) * 4 + leftEdge + 1}vmin,${(size + margin) * 13 + 14}vmin)` }}><img height={`${size * 10}vmin`} src={DownArrowImg} /></div>
      <div onClick={() => handleDown(5)} style={{ position: "absolute", transform: `translate(${(size + margin) * 5 + leftEdge + 1}vmin,${(size + margin) * 13 + 14}vmin)` }}><img height={`${size * 10}vmin`} src={DownArrowImg} /></div>

      <div onClick={() => handleRight(3)} style={{ position: "absolute", transform: `translate(${(size + margin) * 10 + leftEdge + 1}vmin,${(size + margin) * 3 + topEdge}vmin)` }}><img height={`${size * 10}vmin`} src={RightArrowImg} /></div>
      <div onClick={() => handleRight(4)} style={{ position: "absolute", transform: `translate(${(size + margin) * 10 + leftEdge + 1}vmin,${(size + margin) * 4 + topEdge}vmin)` }}><img height={`${size * 10}vmin`} src={RightArrowImg} /></div>
      <div onClick={() => handleRight(5)} style={{ position: "absolute", transform: `translate(${(size + margin) * 10 + leftEdge + 1}vmin,${(size + margin) * 5 + topEdge + 2}vmin)` }}><img height={`${size * 10}vmin`} src={RightArrowImg} /></div>


      <div onClick={() => handleLeft(3)} style={{ position: "absolute", transform: `translate(${(size + margin) * 10 + leftEdge - 6}vmin,${(size + margin) * 3 + topEdge + 2}vmin)` }}><img height={`${size * 10}vmin`} src={LeftArrowImg} /></div>
      <div onClick={() => handleLeft(4)} style={{ position: "absolute", transform: `translate(${(size + margin) * 10 + leftEdge - 6}vmin,${(size + margin) * 4 + topEdge + 2}vmin)` }}><img height={`${size * 10}vmin`} src={LeftArrowImg} /></div>
      <div onClick={() => handleLeft(5)} style={{ position: "absolute", transform: `translate(${(size + margin) * 10 + leftEdge - 6}vmin,${(size + margin) * 5 + topEdge + 2}vmin)` }}><img height={`${size * 10}vmin`} src={LeftArrowImg} /></div>

      <div className="score">{score}</div>
      <div className="goalWords">{goalWords.map(item => <p key={item}>{item}</p>)}</div>
      <div className="attribution" > Thanks for the arrows, <a href="https://www.flaticon.com/authors/pixel-perfect">Pixel perfect</a>!</div>
    </div>)
}

const Wordik = () => {
  return (
      <CokeZero/>
  )
}

export default Wordik
