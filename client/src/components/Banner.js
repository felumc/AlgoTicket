import React from "react";
import { Container } from "react-bootstrap";
import { NavBar } from "./NavBar";

function Banner() {
  return (
    <>
    <NavBar></NavBar>
      <section className="vh-100 d-flex justify-content-center align-items-center ">
        <Container className="d-flex justify-content-center align-items-center">
          <h3>La entrada a</h3>
          <h2>Tus eventos</h2>
          <h1>Favoritos</h1>
        </Container>
      </section>
    </>
  );
}

export default Banner;
