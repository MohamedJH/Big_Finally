import React from 'react'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"; 
import {faMapMarkedAlt,faPaperPlane} from "@fortawesome/free-solid-svg-icons"

import "./Adminprofil.css"


export default function Adminprofil() {
    return (
        <Container className="adminProfil-container">
            <Row>
                <Col sm={8} className="adminDetails-container">
                    <div className="card mt-5">
                        <div className="card-header">
                            <h5 className="card-title">Edit Profil</h5>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label >Admin ID</label>
                                        <input type="text" className="form-control" id="inputID" placeholder="" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label >First Name</label>
                                        <input type="text" className="form-control" id="inputFirst" placeholder="First Name ...." />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label >Last Name</label>
                                        <input type="password" className="form-control" id="inputLastName" placeholder="Last Name..." />
                                    </div>
                                </div>    
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <label >Address</label>
                                        <input type="text" className="form-control" id="inputAddress" placeholder="Address...." />
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label>Country</label>
                                        <input type="text" className="form-control" id="inputCounty" />
                                    </div>
                                    <div className="form-group col-md-3">
                                        <label>City</label>
                                        <input type="text" className="form-control" id="inputCity" />
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-md-6">
                                        <button type="submit" className="btn btn-primary">Update</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </Col>
                <Col sm={4} className="adminCard-container">
                    <div className="card mt-5" style={{width: "20rem"}}>
                        <div className="card-header d-flex justify-content-center">
                            <div className="card-img-top" alt="Card image cap"><span>MJ</span></div>
                        </div>
                        <div className="card-body text-center">
                            <h3 className="card-title">Name</h3>
                            <h5 className="card-subtitle mt-2">Admin Type</h5>
                            <span className="card-text"><FontAwesomeIcon icon={faPaperPlane}/> med@gmail.com</span><br/>
                            <span className="text-muted"><FontAwesomeIcon icon={faMapMarkedAlt}/> City, Country</span>
                                
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
