import React from 'react'
import Questions from '../questions'
import { useState } from 'react'
import Result from './Result'
import { ResultContext } from '../App'
import { useContext } from 'react'



export default function QuestionBox({ setResult }) {
  let [count, setCount] = useState(0)
  let [highlight, setHighlight] = useState(false)
  const resultContext = useContext(ResultContext)


  let NextQuestion = () => {
    if (count < 5) {
      setCount(count = count + 1)
    }
  }

  const handleRestart = () => {
    setCount(0);
    setResult(0);
  }
  const AddHighlight = () => {
    setHighlight(highlight = true)
  }
  const RemoveHighlight = () => {
    setHighlight(highlight = false)
  }

  return (
    <div>

      <div>
        {count < 5 ? (
          <div className='questionBox'>
            <h2 className='outOfQuestion'>{count + 1} out of 5 questions</h2>
            <h1 className='question' style={{
              backgroundColor: highlight ? 'red' : '',
              color: highlight ? 'white' : ''
            }}>{Questions[count].text}</h1>
            {Questions[count].options.map((option, index) => {
              return (<div
                key={index}
                className='option'
                onClick={() => {
                  if (option.isCorrect) {
                    setResult(resultContext + 20)
                    console.log("res:", resultContext);
                  }
                  NextQuestion()
                  RemoveHighlight()
                  console.log("count:", count);
                  console.log("index:", index);
                }}>
                <h3>{option.text}</h3>
              </div>
              )
            })}
            <div className='HighButtonDiv'>
              <button className='HighButton' onClick={AddHighlight}>Highlight</button>
              <button className='HighButton' onClick={RemoveHighlight}>Remove Highlight</button>
            </div>

          </div>
        ) : (
          <div>
            <Result GameRestart={handleRestart} />
          </div>
        )}


      </div>
    </div>
  )
}
