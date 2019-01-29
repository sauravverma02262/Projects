import {SET_TITLE} from '../typeConstants'

const initialState = {
  appTitle: "Templates"
}
export default (state=initialState, action) => {
  switch (action.type) {
    case SET_TITLE:{
      return {
        ...state,
        appTitle: "New Title"
      }
    }
  
    default: 
      return state;
    
  }
}