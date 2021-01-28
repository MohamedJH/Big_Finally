import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle, faTimesCircle, faEdit,faPlus} from '@fortawesome/free-solid-svg-icons';
import Popover from "react-bootstrap/Popover"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Button from "react-bootstrap/Button"



import "./Quizzes.css";


import { getQuizzes,editQuizById,addQuiz,removeQuiz } from '../../../../js/actions/quizaction'
import { getQuestions} from '../../../../js/actions/questionaction'

export default function Quizzes() {

    const [isModif, setIsModif] = useState(false)
    const [addQuest, setAddQuest] = useState(false)
   

    const { isLoading, quizzes } = useSelector(state => state.qs)
    const { questions } = useSelector(state => state.quests)
    const dispatch = useDispatch();
    const getAllQuizzes = () => dispatch(getQuizzes())
    const getAllQuestions = () => dispatch(getQuestions())
    const [form, setForm] = useState({
        name: "",
        category: "",
        Questions: []
    })

    const categoryList =[...new Set(questions.map((el)=>el.category))]
    // filtrer les quests qui appartiennent a la categ selectionner
    const questionsFiltred = questions.filter((question)=>question.category===form.category)

    useEffect(() => {
        getAllQuizzes()
    }, [])
    useEffect(() => {
        getAllQuestions()
    }, [isModif])


    



    const handleChangeEdit = (id) => {
        setIsModif(true)
        const quizSelected = quizzes.find((el) => el._id === id)
        setForm(quizSelected);
    }
    const handleChangeAddQuest = (id)=>{
        const questionSelected = questions.find((el) => el._id === id)
        setForm({...form,Questions:[...form.Questions,questionSelected]})
    }
    const handleChangeInput =(e)=>{
        switch(e.target.name){
            case "category":
            setForm({...form,category:e.target.value});    
            break;
            case "name":
            setForm({...form,name:e.target.value}); 
            break;
            default:
            setForm({...form,Questions:e.target.value});

        }
    }
    const editQuiz = (id,formData) => dispatch(editQuizById(id,formData));
    const addNewQuiz = (inputData) => dispatch(addQuiz(inputData));

    const handleChangeSubmit =(e)=>{
        e.preventDefault()
        isModif ? editQuiz(form._id,form):addNewQuiz(form)
        setIsModif(false)
    }


    const handleChangeAdd =()=>{
        setForm({
            name:"",
           category:"",
           Questions:[] 
        })
       setAddQuest(true)
       setIsModif(false)
    }

    const removeQuestionByID =(id) => dispatch(removeQuiz(id))


    const popover = (j) => (
        <Popover id="popover-basic">
            <Popover.Title as="h3">Difficulty : {form.Questions[j].difficulty}</Popover.Title>
            <Popover.Content dangerouslySetInnerHTML={{__html:form.Questions[j].question}}>
                
            </Popover.Content>
        </Popover>
    );
    return (
        <Container className="question-container">
            <Row>
                <Col sm={6} className="Details-container">
                    <div className="card my-1">
                        <div className="card-header">
                            <h5 className="card-title">{!addQuest? "Edit Quiz":"Add Quiz"} </h5>
                        </div>
                        <div className="card-body">
                            <form className="row">
                                <div className="col-6 mb-2">
                                    <label className="form-label">Quiz Name :</label>
                                    <input type="text" name="name" className="form-control"
                                        value={form.name}
                                        disabled={addQuest || isModif ?  false: true}
                                        onChange={(e)=>handleChangeInput(e)}
                                    />
                                </div>
                                <div className={addQuest ? "d-none" : "col-4 mb-2"}>
                                    <label className="form-label">Quiz ID :</label>
                                    <input type="text" name="_id" className="form-control"
                                        value={form._id}
                                        disabled={addQuest || isModif ? false : true}
                                        onChange={(e)=>handleChangeInput(e)}
                                    />
                                </div>
                            </form>

                            <form className="row">
                                <div className="col-6">
                                    <label className="form-label"> {isModif ? "category:" : "category List:"}</label>
                                    <select name="category" className="form-select mb-3" value={form.category}
                                                                onChange={(e)=>handleChangeInput(e)}
                                                                disabled={addQuest || !isModif ?  false: true}
                                                                >
                                            <option>Open this select menu</option>
                                            {
                                                categoryList.map((el)=><option>{el}</option>)
                                            }

                                    </select>
                                    
                                </div>
                            </form>
                            <form className="row">

                            </form>
                            <form className="Quizzes-container d-flex flex-wrap align-content-around justify-content-around">
                                {
                                    form.Questions.map((question, j) => (<OverlayTrigger trigger="click" placement="right" overlay={popover(j)}>
                                        <Button variant="success">QUIESTION N° {j + 1} </Button>
                                    </OverlayTrigger>))
                                }

                            </form>
                            <form className="col-md-12 border-info d-flex justify-content-between mt-2">
                                    <button type="button"   className="btn btn-outline-dark"  
                                                            onClick={handleChangeSubmit}
                                                            >{addQuest? "ADD":"UPDATE"}</button>
                                    <button type="button"   className="btn btn-dark border-0 rounded-circle"  
                                                onClick={handleChangeAdd}
                                                >
                                                <FontAwesomeIcon size="1x" icon={faPlusCircle}/>
                                    </button>
                            </form>
                            
                        </div>
                    </div>
                </Col>
                <Col sm={6} className="list-container">
                    <Row className="Quizzes-table table-sm">
                        <table className="table my-2 w-100 h-50" style={{ width: "12rem" }}>
                            <thead className="thead-dark">
                                <tr >
                                    <th scope="col">#</th>
                                    <th scope="col">Quizzes</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Management</th>
                                </tr>
                            </thead>
                            <tbody className="bg-light">
                                {
                                    quizzes.map((quiz, i) => (
                                        <tr>
                                            <th scope="row">{i + 1}</th>
                                            <td>{quiz.name}</td>
                                            <td>{quiz.category}</td>
                                            <td className="d-flex justify-content-around">
                                                <button type="button" className="btn btn-outline-danger rounded-circle"
                                                    onClick={()=>removeQuestionByID(quiz._id)}
                                                ><FontAwesomeIcon icon={faTimesCircle} /></button>
                                                <button type="button" className="btn btn-outline-success rounded-circle"
                                                    onClick={() => handleChangeEdit(quiz._id)}
                                                ><FontAwesomeIcon icon={faEdit} /></button>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </Row>
                    <Row className="Quizzes-table table-sm">
                        <table className="table my-2 h-50 w-100 ">
                            <thead className="thead-dark">
                                <tr >
                                    <th scope="col">#</th>
                                    <th scope="col">Question</th>
                                    <th scope="col">Difficulty</th>
                                    <th scope="col">Management</th>
                                </tr>
                            </thead>
                            <tbody className="bg-light">
                                {
                                    form.category===""? null:
                                    questionsFiltred.map((el, i) =>(
                                        
                                        <tr>
                                            <th scope="row" >{i + 1}</th>
                                            <td dangerouslySetInnerHTML={{__html:el.question}}></td>
                                            <td>{el.difficulty}</td>
                                            <td className="d-flex justify-content-around">
                                                
                                                <button type="button" className="btn btn-outline-success rounded-circle"
                                                    onClick={() => handleChangeAddQuest(el._id)}
                                                ><FontAwesomeIcon icon={faPlus} /></button>
                                            </td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </table>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}
