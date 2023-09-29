import React, { useEffect, useState } from 'react';
import useQuestion from '../useReducer/QuestionContext';
import { useNavigate } from 'react-router-dom';

export default function Timer() {
    const {state} = useQuestion();
    const totalSeconds = state.hours * 3600 + state.minutes * 60 + state.seconds;
    const [timerTime, setTimerTime] = useState(totalSeconds);
    const navigate = useNavigate();

    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);


    useEffect(()=>{
        const timer = setInterval(() => {
            const newTime = timerTime - 1;

            const hoursDisplay = Math.floor(timerTime / 3600);
            const minutesDisplay = Math.floor((timerTime % 3600) / 60);
            const secondsDisplay = timerTime % 60;

            setHours(hoursDisplay)
            setMinutes(minutesDisplay)
            setSeconds(secondsDisplay)
      
            if (newTime >= 0) {
              setTimerTime(newTime);
              console.log('timerTime',timerTime)
            } else {
              clearInterval(timer);
              navigate('/score')
            }
          }, 1000);
      
          return () => {
            clearInterval(timer);
          };

    },[timerTime]);

  return (
    <>
        <div className="hour">   { hours }</div>
        <div className="minutes">{ minutes }</div>
        <div className="seconds">{ seconds }</div>
    </>
  );
};

