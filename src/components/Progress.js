import React from 'react'

function Progress({currentQuestionIndex, questionsData}) {
 return (
  <p className="questionCounter">
   {currentQuestionIndex + 1} of {questionsData.length} QNS
  </p>
 )
}

export default Progress