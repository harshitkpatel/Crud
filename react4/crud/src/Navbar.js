import React from "react";
import { Outlet, Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function crudNavbar() {
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
