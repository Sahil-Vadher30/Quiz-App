import React from 'react'
import './FinalScreen.css'
import useQuestion from '../../useReducer/QuestionContext'
import { useNavigate } from 'react-router';

export default function FinalScreen() {
    const {state, handleCategoryChange, handleDifficultyChange, handleTypeChange, handleAmountChange, handleScoreChange} = useQuestion();
    const navigate = useNavigate();

    const handleBackToSettings = () =>{
      handleCategoryChange("");
      handleDifficultyChange("");
      handleTypeChange("");
      handleAmountChange(10);
      handleScoreChange(0);

      navigate('/')
    }
  
  return (
    <div className='result'>
      Score : {state.score}

      <button onClick={handleBackToSettings}>Back to Home</button>
    </div>
  )
}
