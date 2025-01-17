import React, { useState } from 'react'
import questionsData from '../data/questions.json';
import RestartModal from '../modals/RestartModal';
import Progress from './Progress';

function Question({updateScore, score, setScore}) {

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isQuestionAnswered, setIsQuestionAnswered] = useState(false)
  const [correctAnswer, setCorrectAnswer] = useState(null)
  const [selectedOption, setSelectedOption] = useState(null);



  const currentQuestion = questionsData[currentQuestionIndex];

  const openModal = () => {
    setIsModalOpen(true)
  }

  const handleNext = () => {
    if (currentQuestionIndex < questionsData.length - 1) {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setIsQuestionAnswered(false);
      setCorrectAnswer(null);
      setSelectedOption(null);
    } else {
      openModal(); 
      setIsQuestionAnswered(false)
    }
  };

  const handleAnswer = (e, selectedOption) => {
    if(isQuestionAnswered) return
    setSelectedOption(selectedOption);
    if (selectedOption === currentQuestion.answer) {
      e.target.style.backgroundColor = '#E3FFE3';
      setCorrectAnswer(selectedOption);
      updateScore(currentQuestion.points);
    } else {
      e.target.style.backgroundColor = '#FFD4D4';
      setCorrectAnswer(currentQuestion.answer);
    }
    setIsQuestionAnswered(true)
  };

  return (
    <div className='questionsContainer'>
      <p>{currentQuestionIndex + 1}. {currentQuestion.question}</p>
      <div className="possibleAnswersContainer">
        {currentQuestion.options.map((option, index) => (
          <button
            onClick={(e) => handleAnswer(e, option)}
            key={index}
            style={
              correctAnswer === option ? { backgroundColor: '#E3FFE3' } :
                (selectedOption === option && correctAnswer !== option ? { backgroundColor: '#FFD4D4' } : {})
            }
            disabled={isQuestionAnswered && selectedOption !== option}
          >
            {option}
          </button>
        ))}
      </div>
      <div className='nextContainer'>
        <button disabled={!isQuestionAnswered} onClick={handleNext} className='nextButton'>Next</button>
      </div>
      <Progress currentQuestionIndex={currentQuestionIndex} questionsData={questionsData}/>
      {isModalOpen && <RestartModal setScore={setScore} score={score} setIsModalOpen={setIsModalOpen} setCurrentQuestionIndex={setCurrentQuestionIndex} />}
    </div>
  )
}

export default Question