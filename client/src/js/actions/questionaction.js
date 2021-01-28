import { GET_QUESTIONS,ADD_QUESTIONS} from '../actionType.js'
import axios from "axios"

export const getQuestions = ()=>{
    return (dispatch)=>{
        axios.get("/api/questions/all").then((res)=>{
            dispatch({
                type: GET_QUESTIONS,
                payload: res.data,
            })
        })

    }
}

export const removeQuestion =(id)=>{
    return (dispatch)=>{
        axios
        .delete(`/api/questions/${id}`)
        .then((res)=> dispatch(getQuestions()))
        .catch((err)=>alert(err))
    }
}



export const editQuestionById = (id, inputData) => (dispatch) => {
    axios.put(`api/questions/${id}`, inputData).then((res) => dispatch(getQuestions()));
};

export const addQuestion = (newQuestion) => (dispatch) => {
    axios
      .post("/api/questions/addQuestion", newQuestion)
      .then((res) =>
        dispatch({
          type: ADD_QUESTIONS,
          payload: res.data, // a newUser object
        })
      )
      .catch((err) => alert("ADD ERROR "));
};