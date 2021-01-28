import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTimesCircle,faEdit} from '@fortawesome/free-solid-svg-icons'
import { useDispatch } from "react-redux";
import {removeQuestion} from '../../../../js/actions/questionaction'


export default function Tableitem(props) {
    const {_id,question,difficulty,category}=props.question
    const dispatch = useDispatch();
    const removeQuestionByID =(id) => dispatch(removeQuestion(id))
    return (
        <tr>
            <th scope="row">{props.j+1}</th>
            <td dangerouslySetInnerHTML={{__html:question}}></td>
            <td>{difficulty}</td>
            <td>{category}</td>
            <td className="d-flex justify-content-around">
                <button type="button" className="btn btn-outline-danger rounded-circle" onClick={()=>removeQuestionByID(_id)}><FontAwesomeIcon icon={faTimesCircle}/></button>
                <button type="button" className="btn btn-outline-success rounded-circle" onClick={()=>props.handleChangeEdit(_id)}><FontAwesomeIcon icon={faEdit} /></button>
            </td>
        </tr>
    )
}
