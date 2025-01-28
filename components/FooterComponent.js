import React from "react";
import { Container } from "react-bootstrap";

const FooterComponent = () => {
  return (
    <Container className="container-xl mt-3">
      <p className="text-center bg-primary text-white p-3 rounded-top-2">
        &copy;{new Date().getFullYear()} All Rights Reserved |
        coca4017@hotmail.com
      </p>
    </Container>
  );
};

export default FooterComponent;
