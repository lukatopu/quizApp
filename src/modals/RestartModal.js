import React from 'react';

function RestartModal({ setIsModalOpen, setCurrentQuestionIndex, score, setScore }) {
 const closeModal = () => {
  setIsModalOpen(false);
  setCurrentQuestionIndex(0);
  setScore(0)
 };

 return (
  <div className="modalBackdrop">
   <div className="modalContainer">
    <h1>You collected {score}/70 points</h1>
    <button onClick={closeModal}>Restart Quiz</button>
   </div>
  </div>
 );
}

export default RestartModal;
