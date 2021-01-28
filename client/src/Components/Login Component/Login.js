import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";



import "./Login.css"
 
export default function Login() {
  return (
    <Container>
      <Row className="text justify-content-md-center mt-5">
        <Card className="Landing-page">
          <Card.Header className="d-flex flex-column align-items-center text-center">
            <FontAwesomeIcon size="6x" color="teal" icon={faUserCircle} />
            <Card.Title className=" mt-3">Se connecter</Card.Title>
          </Card.Header>

          <Card.Body>
            <Form onSubmit={(e)=>e.preventDefault()}>
              <Form.Row>
                <Form.Group controlId="formGridEmail">
                  <Form.Control type="email"  className="Input" placeholder="Téléphone, email ou nom d'utilisateur" required/>
                </Form.Group>
                <Form.Group controlId="formGridPassword">
                  <Form.Control type="password" className="Input" placeholder="Password" required/>
                </Form.Group>
              </Form.Row>
            </Form>
            <Button type="submit" variant="info" className="Button" size="lg" block >Se Connecter</Button>
          </Card.Body>

          <Card.Footer className="text-muted d-flex justify-content-around">
            <Alert.Link href="#">Mot de passe oublié ?</Alert.Link>
            <Alert.Link href="#">S'inscrire sur Twitter ?</Alert.Link>
          </Card.Footer>
        </Card>
      </Row>
    </Container>
  );
}
