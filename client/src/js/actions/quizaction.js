import { GET_QUIZZES, ADD_QUIZZES} from '../actionType.js'
import axios from "axios"


export const getQuizzes = ()=>{
    return (dispatch)=>{
        axios.get("/api/quizzes/all").then((res)=>{
            
            dispatch({
                type: GET_QUIZZES,
                payload: res.data,
            })
        })

    }
}

export const addQuiz = (newQuiz) => (dispatch) => {
    axios
      .post("/api/quizzes/addQuiz", newQuiz)
      .then((res) =>
        dispatch({
          type: ADD_QUIZZES,
          payload: res.data, // a newQuiz object
        })
      )
      .catch((err) => alert("ADD QUIZ ERROR "));
};
export const removeQuiz =(id)=>{
    return (dispatch)=>{
        axios
        .delete(`/api/quizzes/${id}`)
        .then((res)=> dispatch(getQuizzes()))
        .catch((err)=>alert(err))
    }
}


export const editQuizById = (id, inputData) => (dispatch) => {
    axios.put(`api/quizzes/${id}`, inputData).then((res) => dispatch(getQuizzes));
};