import React, { useState } from 'react'
import './Dice.css'

const Dice = () => {

const [random,setRandomValue]=useState('1')
const [playerNumber,setPlayerNumber]=useState(1)
const DiceFuntion=()=>{
  const value=(Math.floor(Math.random()*6)+1)
  setRandomValue(value)
 if(value==2 || value==3 || value==4 || value==5){
  if(playerNumber===1){
    setPlayerNumber(2)
  }
  else{
    setPlayerNumber(1)
  }
 }
  
}
 return (
    <div className='header'>
      <p className='dice'>Dice Value : {random}</p>
      <p>Chance for player : {playerNumber}</p>
      <button onClick={DiceFuntion}>Dice</button>
      
      </div>
  )
}

export default Dice