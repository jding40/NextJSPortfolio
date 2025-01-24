import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
// Planning => In Progress => Under Review => Completed

export default function ProjectCard({ project }) {
  return (
    <Card className="px-2 mb-4">
      <div className="w-100 ratio ratio-16x9 mb-3">
        <Card.Img
          variant="top"
          src={project.project_image}
          alt={project.project_name}
          className="w-100 ratio ratio-16x9 my-2"
        />
      </div>

      <Card.Body>
        <Card.Title>
          <strong>{project.project_name}</strong>
        </Card.Title>
        <Card.Text>
          <i className="fs-6 mb-2">{project.time_period}</i> <br />
          <strong>Tech stack:</strong> {project.tech_stack.join(", ")}
        </Card.Text>
        <Button variant="primary" className="me-2">
          Details
        </Button>
        {project.deployment && (
          <a href={project.deployment} target="_blank">
            <Button variant="primary">Deployment</Button>
          </a>
        )}
      </Card.Body>
    </Card>
  );
}
