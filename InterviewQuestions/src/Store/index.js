import {createStore, combineReducers} from 'redux'
import Header  from './Header/header.reducer'
import Java from './JavaQuestions/JavaReducer'
let rootReducers = combineReducers({Header, Java})
const store = createStore(rootReducers)

export default store