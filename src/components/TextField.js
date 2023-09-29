import React, { useState } from 'react'
import './TextField'
import useQuestion from '../useReducer/QuestionContext'

export default function TextField(props) {
      const {label} = props;
      const {state, handleAmountChange, handleHoursChange,handleMinutesChange, handleSecondsChange } = useQuestion();
      const [value, setValue] = useState("");
    
    const handleChange = (e) =>{
      setValue(e.target.value);
      switch(label){
        case "No. of Questions":
          handleAmountChange(e.target.value);
          break;
        case "Hours":
          handleHoursChange(e.target.value);
          break;
        case "Minutes":
          handleMinutesChange(e.target.value);
          break;
        case "Seconds":
          handleSecondsChange(e.target.value);
          break;
        default:
          return;
      }
    }
    
  return (
    <div>
        <label>{label}</label>
        { label==='No. of Questions' && <input type="number" onChange={handleChange}  value={state.amount_of_question}/>}
        { label==='Hours'   && <input type="number" className='hours' min={0} max={10} onChange={handleChange}  value={state.hours}/>}
        { label==='Minutes' && <input type="number" className='minutes' min={0} max={59} onChange={handleChange}  value={state.minutes}/>}
        { label==='Seconds' && <input type="number" className='seconds' min={0} max={59} onChange={handleChange}  value={state.seconds}/>}
    </div>
  )
}
