import React,{useReducer, createContext, useContext} from 'react';
import Reducer,{ initialState } from './questionReducer';


const questionContext = createContext(initialState);

export const QuestionProvider = ({ children }) =>{

    const [state, dispatch] = useReducer(Reducer, initialState);

    const handleCategoryChange = (payload) => {
      dispatch({
        type: "CHANGE_CATEGORY",
        payload,
      });
    };
    
    const handleDifficultyChange = (payload) => {
      dispatch({
        type: "CHANGE_DIFFICULTY",
        payload,
      })
    };
    
    const handleTypeChange = (payload) => {
      dispatch({
        type: "CHANGE_TYPE",
        payload,
      })
    };
    
    const handleAmountChange = (payload) => {
      dispatch({
        type: "CHANGE_AMOUNT",
        payload,
      })
    };
    
    const handleScoreChange = (payload) => {
      dispatch({
        type: "CHANGE_SCORE",
        payload,
      })
    };

    const handleHoursChange = (payload) => {
      dispatch({
        type: "CHANGE_HOURS",
        payload,
      })
    };
    const handleMinutesChange = (payload) => {
      dispatch({
        type: "CHANGE_MINUTES",
        payload,
      })
    };
    const handleSecondsChange = (payload) => {
      dispatch({
        type: "CHANGE_SECONDS",
        payload,
      })
    };

    // console.log('state =',state)

    const value = { state , handleCategoryChange, handleDifficultyChange, handleTypeChange, handleAmountChange, handleScoreChange, handleHoursChange, handleMinutesChange, handleSecondsChange}
    
  return <questionContext.Provider value={value}>{ children }</questionContext.Provider>
}

const useQuestion = () => {
  const context = useContext(questionContext);
  // console.log('context =',context)

  // if (context === undefined) {
  //   throw new Error("useShop must be used within ShopContext");
  // }

  return context;
};

export default useQuestion;
