import {combineReducers} from 'redux'
import {questionReducer} from './questionreducer'
import {quizReducer} from './quizreducer'

export const rootReducer = combineReducers({
	quests:questionReducer,
	qs:quizReducer,

})