import React from 'react'
import { ResultContext } from '../App'
import { useContext } from 'react'

export default function Result({ GameRestart }) {

  const result = useContext(ResultContext)
  console.log(result);
  return (
    <div className='resultBox'>
      <h2 className='Result'>Result : {result}% </h2>
      <button className='resultbutton' onClick={GameRestart}> Restart</button>
    </div>
  )
}
