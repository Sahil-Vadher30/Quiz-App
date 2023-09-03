import React, { useState } from 'react'
import './TextField'
import useQuestion from '../useReducer/QuestionContext'

export default function TextField() {
      const { handleAmountChange } = useQuestion();
    
    const handleChange = (e) =>{
        handleAmountChange(e.target.value);
    }
    
  return (
    <div>
        <label>No. of Questions</label>
        <input type="number" onChange={handleChange}  />
    </div>
  )
}
