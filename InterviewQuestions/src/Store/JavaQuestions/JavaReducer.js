import {javaQuestions} from '../Data/java'
const initialState = {
  QA: {
    java: javaQuestions,
    springBoot:[]
  },
  quesFor:'java'
}
export default (state=initialState, action) => {
  switch (action.type) {
    case 'SET_TOPIC':{
      return {
        ...state,
        quesFor: action.topic
      }
    }
  
    default: 
      return state;
    
  }
}