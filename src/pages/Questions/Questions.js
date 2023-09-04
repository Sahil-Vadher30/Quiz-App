import React, { useState, useEffect } from 'react'
import './Questions.css'
import Axios from '../../Axios/Axios';
import useQuestion from '../../useReducer/QuestionContext';
import { decode } from 'html-entities';
import { useNavigate } from 'react-router-dom';


const getRandomInt = (max) => {
  return Math.floor(Math.random() * Math.floor(max));
};

export default function Questions() {
    const {state, handleScoreChange} = useQuestion();
    // console.log('state =', state)
    // console.log("question_category =",state.question_category)
    // console.log("question_type =",state.question_type)
    // console.log("question_difficulty =",state.question_difficulty)
    // console.log("amount_of_question =",state.amount_of_question)
    // console.log("score =",state.score)
    const navigate = useNavigate()


    // let apiURL = `https://opentdb.com/api.php?amount=${}&category=${}&difficulty=${}&type=${}`;
    let apiURL = `https://opentdb.com/api.php?amount=${state.amount_of_question}`;

    if (state.question_category){
      apiURL = apiURL.concat(`&category=${state.question_category}`);
    }
    if (state.question_difficulty){
      apiURL = apiURL.concat(`&difficulty=${state.question_difficulty}`);
    }
    if (state.question_type){
      apiURL = apiURL.concat(`&type=${state.question_type}`);
    }

    // console.log('apiURL =', apiURL);
    const { response, loading } = Axios({ url: apiURL});
    // console.log('question response =',response);

    const [questionIndex, setQuestionIndex] = useState(0);
    const [options, setOptions] = useState([]);
    // console.log('options =', options)

    useEffect(() => {
      if (response?.results.length) {
        const question = response.results[questionIndex];
        let answers = [...question.incorrect_answers];
        // to set options randomly
        answers.splice(
          getRandomInt(question.incorrect_answers.length),
          0,
          question.correct_answer
        );
        setOptions(answers);
      }
    }, [response, questionIndex]);
    

    // to check answer is checked or not
    var [checked, setChecked] = useState(false); 
    // console.log('checked = ',checked)
    const CheckAnswer = () =>{
      setChecked(true);
    }

    const handleClickAnswer = (data,id) =>{
      const question = response.results[questionIndex];
      // console.log('my answer =',data);
      // console.log('correct answrer = ',question.correct_answer)
      if(data === question.correct_answer){
        console.log('True')
        handleScoreChange( state.score+1 );
      }


      if(questionIndex+1 < response.results.length){
        setQuestionIndex(questionIndex+1)
      }
      else{
        navigate('/score')
      }
    }



    if(loading){
      return(
        <>
            <div className="loading"></div>
        </>
    )
    }

  return (
    <div className='container'>

        <div className='questionHeader'>
          <div className="questionNo">
            Question No.{questionIndex + 1} of {state.amount_of_question}
          </div>
          <div className="timer">
            <div className="hour">HH</div>
            <div className="minutes">MM</div>
            <div className="seconds">SS</div>
          </div>
        </div>

        <div className="question">
          { decode(response.results[questionIndex].question) }
        </div>

        {/* <div className="options">
          <div className="option">
            <span>A. </span>Option-1
          </div>
          <div className="option">
            <span>B. </span>Option-1
          </div>
          <div className="option">
            <span>C. </span>Option-1
          </div>
          <div className="option">
            <span>D. </span>Option-1
          </div>
        </div> */}

        <div className="options">
          {
            options.map((data, id)=>{
              return (
                <div className="option" onClick={()=>{handleClickAnswer(data,id)}} value={data}>
                    
                  <span>
                    { id==0 ? 'A.': null }
                    { id==1 ? 'B.': null }
                    { id==2 ? 'C.': null }
                    { id==3 ? 'D.': null }
                  </span> {decode(data)}

                </div>
              )
            })
          }
        </div>

        <h3>Score: {state.score} / {response.results.length}</h3>

        {/* <button >Next</button> */}

    </div>
  )
}
