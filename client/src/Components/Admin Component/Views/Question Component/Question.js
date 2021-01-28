import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

import "./Question.css";
import Tableitem from "./Tableitem";

import {
  getQuestions,
  editQuestionById,
  addQuestion,
} from "../../../../js/actions/questionaction";

export default function Question() {
  //useSelector pou consommer state depuis store
  const { isLoading, questions } = useSelector((state) => state.quests);

  // appeller useDispatch pour utiliser la fonction dispatch
  const dispatch = useDispatch();
  const getAllQuestions = () => dispatch(getQuestions());
  const addNewQuestion = (inputData) => dispatch(addQuestion(inputData));

  useEffect(() => {
    getAllQuestions();
  }, []);

  const [addQuest, setAddQuest] = useState(false);
  const [isModif, setIsModif] = useState(false);
  const [form, setForm] = useState({
    category: "",
    type: "",
    difficulty: "",
    question: "",
    correct_answer: "",
    incorrect_answers: ["", "", ""],
  });

  const categoryList = [...new Set(questions.map((el) => el.category))];
  // choisir une categorie
  const handleChangeSelectCatg = (e) => {
    setForm({
      category: e.target.value,
      type: "",
      difficulty: "",
      question: "",
      correct_answer: "",
      incorrect_answers: ["", "", ""],
    });
  };
  // filtrer les quests qui appartiennent a la categ selectionner
  const questionsFiltred = questions.filter(
    (question) => question.category === form.category
  );

  // edit Question  Section
  const handleChangeEdit = (id) => {
    const questEdit = questions.find((el, j) => el._id === id);
    setForm(questEdit);
    setIsModif(true);
  };

  // MAJ Quest
  const handleChangeInput = (e) => {
    const incorrect_answers = form.incorrect_answers;
    switch (e.target.name) {
      case "category":
        setForm({ ...form, category: e.target.value });
        break;
      case "question":
        setForm({ ...form, question: e.target.value });
        break;
      case "opt1":
        incorrect_answers[0] = e.target.value;
        setForm({ ...form, incorrect_answers: incorrect_answers });
        break;
      case "opt2":
        incorrect_answers[1] = e.target.value;
        setForm({ ...form, incorrect_answers: incorrect_answers });
        break;
      case "opt3":
        incorrect_answers[2] = e.target.value;
        setForm({ ...form, incorrect_answers: incorrect_answers });
        break;
      case "opt4":
        setForm({ ...form, correct_answer: e.target.value });
        break;
      case "difficulty":
        setForm({ ...form, difficulty: e.target.value });
        break;
      default:
        setForm({ ...form, type: e.target.value });
    }
  };
  const editQuest = (id, formData) => dispatch(editQuestionById(id, formData));
  const handleChangeSubmit = (e) => {
    e.preventDefault();
    !addQuest ? editQuest(form._id, form) : addNewQuestion(form);
    setIsModif(false);
  };

  const handleChangeAdd = () => {
    setForm({
      category: "",
      type: "",
      difficulty: "",
      question: "",
      correct_answer: "",
      incorrect_answers: ["", "", ""],
    });
    setIsModif(true);
    setAddQuest(true);
  };

  return (
    <Container className="question-container">
      <Row>
        <Col sm={6} className="Details-container">
          <div className="card my-1">
            <div className="card-header">
              <h5 className="card-title">
                {!addQuest ? "Edit Question" : "Add Question"}{" "}
              </h5>
            </div>
            <div className="card-body">
              <form className="row">
                <div className="col-7">
                  <label className="form-label"> category List :</label>
                  <select
                    name="category"
                    className="form-select mb-3"
                    onChange={(e) => handleChangeSelectCatg(e)}
                    value={form.category}
                  >
                    <option>Open this select menu</option>
                    {categoryList.map((category, i) => (
                      <option key={i}>{category}</option>
                    ))}
                  </select>
                </div>
              </form>
              <form className="row">
                <div className="col-8 mb-1">
                  <label className="form-label">Question :</label>
                  <input
                    type="text"
                    name="question"
                    className="form-control"
                    value={form.question}
                    disabled={isModif ? false : true}
                    onChange={(e) => handleChangeInput(e)}
                  />
                </div>

                <div className={addQuest ? "d-none" : "col-4 mb-2"}>
                  <label className="form-label">Question ID :</label>
                  <input
                    type="text"
                    name="_id"
                    className="form-control"
                    value={form._id}
                    disabled={addQuest ? false : true}
                    onChange={(e) => handleChangeInput(e)}
                  />
                </div>
              </form>
              <form className="row">
                <div className="col-12">
                  <label className="form-label">Options :</label>
                  <div className="row g-3 my-1">
                    <div className="col input-group">
                      <span className="input-group-text" id="basic-addon1">
                        Opt :
                      </span>
                      <input
                        type="text"
                        name="opt1"
                        className="form-control"
                        value={form.incorrect_answers[0]}
                        disabled={isModif ? false : true}
                        onChange={(e) => handleChangeInput(e)}
                      />
                    </div>
                    <div className="input-group col">
                      <span className="input-group-text" id="basic-addon1">
                        Opt :
                      </span>
                      <input
                        type="text"
                        name="opt2"
                        className="form-control"
                        value={form.incorrect_answers[1]}
                        disabled={isModif ? false : true}
                        onChange={(e) => handleChangeInput(e)}
                      />
                    </div>
                  </div>
                  <div className="row g-3 my-2">
                    <div className="input-group col">
                      <span className="input-group-text" id="basic-addon1">
                        Opt :
                      </span>
                      <input
                        type="text"
                        name="opt3"
                        className="form-control"
                        value={form.incorrect_answers[2]}
                        disabled={isModif ? false : true}
                        onChange={(e) => handleChangeInput(e)}
                      />
                    </div>
                    <div className=" input-group col">
                      <span className="input-group-text" id="basic-addon1">
                        Opt :
                      </span>
                      <input
                        type="text"
                        name="opt4"
                        className="form-control is-valid"
                        value={form.correct_answer}
                        disabled={isModif ? false : true}
                        onChange={(e) => handleChangeInput(e)}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-2">
                  <label className="form-label">Difficulty :</label>
                  <input
                    type="text"
                    name="difficulty"
                    className="form-control"
                    value={form.difficulty}
                    disabled={isModif ? false : true}
                    onChange={(e) => handleChangeInput(e)}
                  />
                </div>
                <div className="col-md-4 mb-2">
                  <label className="form-label">Type :</label>
                  <input
                    type="text"
                    name="type"
                    className="form-control"
                    value={form.type}
                    disabled={addQuest ? false : true}
                    onChange={(e) => handleChangeInput(e)}
                  />
                </div>

                <div className="col-md-8 mb-3">
                  <button
                    type="button"
                    className="btn btn-outline-dark"
                    onClick={handleChangeSubmit}
                  >
                    {addQuest ? "ADD" : "UPDATE"}
                  </button>
                </div>
                <div className="col-md-4 mb-3 d-flex justify-content-end">
                  <button
                    type="button"
                    className="btn btn-dark border-0"
                    onClick={handleChangeAdd}
                  >
                    <FontAwesomeIcon size="2x" icon={faPlusCircle} />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </Col>
        <Col sm={5} className="list-container">
          <table className="table my-2 w-75">
            <thead className="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Question</th>
                <th scope="col">Difficulty</th>
                <th scope="col">Category</th>
                <th scope="col">Management</th>
              </tr>
            </thead>
            <tbody className="bg-light">
              {form.category === ""
                ? null
                : questionsFiltred.map((question, j) => (
                    <Tableitem
                      key={question._id}
                      question={question}
                      j={j}
                      handleChangeEdit={handleChangeEdit}
                      // handleChangeEdit={handleChangeEdit}
                    />
                  ))}
            </tbody>
          </table>
        </Col>
      </Row>
    </Container>
  );
}
