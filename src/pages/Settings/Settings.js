import React, { useState } from 'react'
import './Settings.css'
import './Responsive.css'
import { Link, useNavigate } from 'react-router-dom';
import SelectField from '../../components/SelectField'
import Axios from '../../Axios/Axios';
import TextField from '../../components/TextField';
import useQuestion from '../../useReducer/QuestionContext';

export default function Settings() {
    const {response, error, loading} = Axios({url:"/api_category.php"});
    // console.log(response)
    const navigate = useNavigate();

    const difficultyOptions = [
        {id:'easy', name:'Easy'},
        {id:'medium', name:'Medium'},
        {id:'hard', name:'Hard'},
    ];

    const typeOptions = [
        {id:"multiple", name:"Multiple Choice"},
        {id:"boolean", name:"True/False"},
    ];

    const {state} = useQuestion()
    const [alertNoOfQuestion, setAlert] = useState(false);
    const alertfunc = () =>{
        if(state.amount_of_question < 5){
            // console.log('if =',state.amount_of_question)
            setAlert(true);
            return true;
        }
        else{
            //   console.log('else =',state.amount_of_question)
            setAlert(false);
            return false;
        }
    }

    if(loading){
        return(
            <>
                <div className="loading"></div>
            </>
        )
    }

    if(error){
        return(
            <>
                <h1>some alert occour</h1>
            </>
        )
    }
    
    function handleSubmit(e){
        e.preventDefault();
        // console.log('submit')
        if(alertfunc()){
            console.log('alert')
            return;
        }
        else{
            let totalSeconds = state.hours * 3600 + state.minutes * 60 + state.seconds;
            // console.log('totalSeconds=',totalSeconds)
            if(totalSeconds<=0){
                alert('Please enter a valid duration.');
            }
            else{
                navigate('/questions')
            }
        }
    }

  return (
    <form className='main' onSubmit={handleSubmit}>
        <div className='form'>
            <SelectField options={response.trivia_categories} label="Category" />
            <SelectField options={difficultyOptions} label="Difficulty" />
            <SelectField options={typeOptions} label="Type" />

            <TextField label="No. of Questions" />
            <label htmlFor="alert" className={`alertNoOfQuestion ${alertNoOfQuestion? 'visible' : 'hidden'}`}> No. of questions can not be less than 5 </label>

            <div className="timeSelect">
                <TextField label="Hours" />
                <TextField label="Minutes" />
                <TextField label="Seconds" />
            </div>

        {/* <Link to="/questions"> */}
            <button type='submit'>
                Play Now
            </button>
        {/* </Link> */}
      </div>
    </form>
  )
}
