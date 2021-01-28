import {  GET_QUESTIONS,ADD_QUESTIONS} from "../actionType"


const initState = {
    questions:[],
    isLoading:true
}

export const questionReducer =(state=initState,action) => {
    switch(action.type){
        case  GET_QUESTIONS:
        return {...state,isLoading:false,questions:action.payload};
        case ADD_QUESTIONS:
        return { ...state, questions: [action.payload, ...state.questions] };
        default:
        return state
    }
}