import React, { Component } from "react";
// import Form from './Form';
// import Table from './Table';
import { Outlet, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default class Formnavbar extends Component {
  render() {
    return (
      <div>
        <Navbar expand="lg" className="bg-body-tertiary">
          <Container>
            <Nav className="me-auto">
              <Link to="/" style={{ textDecoration: "none", margin: "20px" }}>
                Form
              </Link>
              <Link
                to="/table"
                style={{ textDecoration: "none", margin: "20px" }}
              >
                Table
              </Link>
            </Nav>
          </Container>
        </Navbar>
        <Outlet />
      </div>
    );
  }
}
