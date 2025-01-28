import { Container, Row, Col, Button } from "react-bootstrap";
import Image from "next/image";

export default function Home() {
  return (
    <Container className="container-xl my-5 border border-2 border-info rounded-3 shadow-lg px-4">
      <h1 className="pt-5">Welcome!</h1>
      <Row className="align-items-center">
        {/* 左侧内容 (占 3/5) */}
        <Col md={7} className="p-4">
          <h1 className="display-4 fw-bold text-primary my-3">
            Jianzhong Ding
          </h1>
          <p className="fs-4 text-muted">
            I&apos;m a passionate{" "}
            <strong className="text-success">full-stack web developer,</strong>
            <br />
            graduated from{" "}
            <strong className="text-success">Seneca Polytechnic</strong>, <br />
            based in <strong className="text-success">Toronto</strong>.
          </p>
          <p className="text-secondary my-5">
            With expertise in building modern, responsive web applications and a
            commitment to clean code and great design.
          </p>
          <div className="d-flex align-items-center my-4">
            <a
              href="https://github.com/jding40"
              target="_blank"
              rel="noopener noreferrer"
              className="me-4"
            >
              <Image
                src="/github-brands.svg"
                alt="GitHub"
                width={40}
                height={40}
              />
            </a>
            <a
              className="invisible me-4"
              href="https://indeed.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/indeed-2.svg" alt="Indeed" width={40} height={40} />
            </a>
            <a
              href="https://www.linkedin.com/in/coca4017/"
              target="_blank"
              rel="noopener noreferrer"
              className="me"
            >
              <Image
                src="/linkedin.svg"
                alt="LinkedIn"
                width={40}
                height={40}
              />
            </a>
          </div>
          <div className="d-flex align-items-center my-5">
            <Button href="/resume.pdf" download={true}>
              Download Resume
            </Button>
          </div>
        </Col>

        {/* 右侧内容 (占 2/5) */}
        <Col md={5} className="text-center">
          <Image
            src="/Coca Ding-2.png"
            alt="Coca"
            width={300}
            height={400}
            className="rounded-circle shadow-lg my-5"
          />
        </Col>
      </Row>
    </Container>
  );
}
