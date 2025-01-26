import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProjectCard from "@/components/ProjectCard";
import projects from "@/data/projects.json";

export default function ProjectsPage() {
  const sortedWebappProjects = projects
    .filter((project) => project.type === "Web App")
    .sort((a, b) => b.project_id - a.project_id);

  const sortedOtherProjects = projects
    .filter((project) => project.type !== "Web App")
    .sort((a, b) => b.project_id - a.project_id);

  return (
    <>
      <Container fluid="md">
        {sortedWebappProjects.length > 0 && (
          <h1 className="my-5">Web App Projects</h1>
        )}
        <Row className="align-items-stretch">
          {sortedWebappProjects.map((project, index) => {
            return (
              <Col md={12} lg={6} key={project.project_id}>
                <ProjectCard project={project} />
              </Col>
            );
          })}
        </Row>
      </Container>
      <Container fluid="md">
        {sortedOtherProjects.length > 0 && (
          <h1 className="my-5">Other IT Projects</h1>
        )}
        <Row className="align-items-stretch">
          {sortedOtherProjects.map((project, index) => {
            return (
              <Col md={12} lg={6} key={project.project_id}>
                <ProjectCard project={project} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}
