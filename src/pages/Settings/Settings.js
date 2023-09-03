import React from 'react'
import './Settings.css'
import { Link } from 'react-router-dom';
import SelectField from '../../components/SelectField'
import Axios from '../../Axios/Axios';
import TextField from '../../components/TextField';

export default function Settings() {
    const {response, error, loading} = Axios({url:"/api_category.php"});
    // console.log(response)

    const difficultyOptions = [
        {id:'easy', name:'Easy'},
        {id:'medium', name:'Medium'},
        {id:'hard', name:'Hard'},
    ];

    const typeOptions = [
        {id:"multiple", name:"Multiple Choice"},
        {id:"boolean", name:"True/False"},
    ];

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
    }

  return (
    <form className='main' onSubmit={handleSubmit}>
        <div className='form'>
            <SelectField options={response.trivia_categories} label="Category" />
            <SelectField options={difficultyOptions} label="Difficulty" />
            <SelectField options={typeOptions} label="Type" />

            <TextField/>
      

        <Link to="/questions">
            <button type='submit'>
                Play Now
            </button>
        </Link>
      </div>
    </form>
  )
}
