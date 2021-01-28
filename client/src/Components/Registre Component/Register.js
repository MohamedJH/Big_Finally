import React, { useState, useEffect } from "react";
import axios from 'axios';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuora } from "@fortawesome/free-brands-svg-icons";

import "./Registre.css";

export default function Register() {
    const [countriesList, setCountriesList] = useState([]);
    const [statesList, setStatesList] = useState([]);


  useEffect(() =>
      axios
        .get("https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bstates%2Bcities.json")
        .then((res) => {
            setCountriesList(res.data)
        }),
    [countriesList]
  );

    const handleChange = (e)=>{
       const country = e.target.value; 
       const listState   = countriesList.find((el)=> el.name===country)
       setStatesList(listState.states) 

    }     


  return (
    <Container>
      <Row className=" text justify-content-md-center mt-5">
        <Card className="Register-page">
          <Card.Header className="d-flex flex-column align-items-center text-center">
            <FontAwesomeIcon size="6x" color="teal" icon={faQuora} />
            {/* <Card.Title className=" mt-3">Se connecter</Card.Title> */}
          </Card.Header>

          <Card.Body>
            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridFirstName">
                  <Form.Label>Nom</Form.Label>
                  <Form.Control
                    type="text"
                    name=""
                    placeholder="Entrer votre Nom"
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLastName">
                  <Form.Label>Prénom</Form.Label>
                  <Form.Control
                    type="text"
                    name=""
                    placeholder="Entrer votre prenom"
                  />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="formGridAddress1">
                <Form.Label>Addresse</Form.Label>
                <Form.Control name="" placeholder="Entrer votre Adresse"/>
              </Form.Group>

              <Form.Row>
                <Form.Group as={Col} controlId="formGridCity">
                  <Form.Label>Pays</Form.Label>
                  <Form.Control as="select" name="" defaultValue="Choose..." onChange={handleChange}>
                        {
                            countriesList.map((country,i)=> <option key={i}>{country.name}</option>)
                        }
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>State</Form.Label>
                  <Form.Control as="select" name="" defaultValue="Choose...">
                        {
                            statesList.map((state,j)=> <option key={j}>{state.name.split(" ")[0]}</option>)
                        }
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Zip</Form.Label>
                  <Form.Control type="text" name="" />
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name=""
                    placeholder="Entrer votre email"
                  />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Mot De Passe</Form.Label>
                  <Form.Control
                    type="password"
                    name=""
                    placeholder="Password"
                  />
                </Form.Group>
              </Form.Row>

              <Form.Group id="formGridCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>

              <Button variant="info" type="submit" className="Button">
                Enregistrer
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}
