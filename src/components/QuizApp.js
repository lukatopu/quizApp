import React, { useState } from 'react'
import Score from './Score'
import Question from './Question'


function QuizApp() {

  const [score, setScore] = useState(0)

const updateScore = (points) => {
  setScore((prevScore) => prevScore + points);
};

  return (
    <div className='quizContainer'>
     <div className='scoreContainer'>
     <h1>Quiz App</h1>
     <Score score={score}/>
     </div>
    <Question setScore={setScore} score={score} updateScore={updateScore}/>
    </div>
  )
}

export default QuizApp