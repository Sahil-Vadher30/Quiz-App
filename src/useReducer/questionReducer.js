
export const initialState = {
    question_category: "",
    question_difficulty: "",
    question_type: "",
    amount_of_question: 10,
    score: 0,
    hours:0,
    minutes:0,
    seconds:0,
  };

const Reducer= (state, action)=> {
    switch (action.type) {
        case "CHANGE_CATEGORY":
          // console.log("CHANGE_CATEGORY", action.payload);
          
          return {
            ...state,
            question_category: action.payload,
          };
        case "CHANGE_DIFFICULTY":
          // console.log("CHANGE_DIFFICULTY", action.payload);
          return {
            ...state,
            question_difficulty: action.payload,
          };
        case "CHANGE_TYPE":
          // console.log("CHANGE_TYPE", action.payload);
          return {
            ...state,
            question_type: action.payload,
          };
        case "CHANGE_AMOUNT":
          // console.log("CHANGE_AMOUNT", action.payload);
          return {
            ...state,
            amount_of_question: action.payload,
          };
        case "CHANGE_SCORE":
          // console.log("CHANGE_SCORE", action.payload);
          return {
            ...state,
            score: action.payload,
          };
        case "CHANGE_HOURS":
          // console.log("CHANGE_SCORE", action.payload);
          return {
            ...state,
            hours: action.payload,
          };
        case "CHANGE_MINUTES":
          // console.log("CHANGE_SCORE", action.payload);
          return {
            ...state,
            minutes: action.payload,
          };
        case "CHANGE_SECONDS":
          // console.log("CHANGE_SCORE", action.payload);
          return {
            ...state,
            seconds: action.payload,
          };
        default:
          return state;
      }
};

export default Reducer;
