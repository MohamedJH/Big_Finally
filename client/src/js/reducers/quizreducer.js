import { GET_QUIZZES, ADD_QUIZZES} from '../actionType.js'




const initState = {
    quizzes:[],
    isLoading:true
}

export const quizReducer =(state=initState,action) => {
    switch(action.type){
        case  GET_QUIZZES:
        return {...state,isLoading:false,quizzes:action.payload};
        case  ADD_QUIZZES:
        return { ...state, quizzes: [...state.quizzes,action.payload] };
        default:
        return state
    }
}