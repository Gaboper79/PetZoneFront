import React from "react";
import logo from "../huellaVerde.png";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
function FormLogin() {
  return (
    <>
      <p id="titulo">PET-ZONE</p>
      <img src={logo} className="App-logo imglogo" alt="logo" />

      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Email" />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Contraseña" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Ingresar
        </Button>
      </Form>
    </>
  );
}

export default FormLogin;
