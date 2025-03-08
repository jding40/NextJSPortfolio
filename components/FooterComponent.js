import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css";

const FooterComponent = () => {
  return (
    <Container className="container-xl mt-3 footer">
      <p className="text-center  text-white p-3 rounded-top-2">
        &copy;{new Date().getFullYear()} All Rights Reserved |
        coca4017@hotmail.com
      </p>
    </Container>
  );
};

export default FooterComponent;
