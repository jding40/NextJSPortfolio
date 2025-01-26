"use client";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ProjectCard.css";
import useEqualHeight from "@/hooks/useEqualHeight";
import SkillLabel from "./SkillLabel";

// Planning => In Progress => Under Review => Completed

export default function ProjectCard({ project }) {
  useEqualHeight(".project-title");
  useEqualHeight(".project-time");
  useEqualHeight(".project-text");

  return (
    <Card className="px-2 mb-4 project-card">
      <div className="w-100 ratio ratio-16x9 mb-3">
        <Card.Img
          variant="top"
          src={project.project_image}
          alt={project.project_name}
          className="w-100 ratio ratio-16x9 my-2"
        />
      </div>

      <Card.Body>
        <Card.Title className="project-title">
          <strong>{project.project_name}</strong>
        </Card.Title>
        <Card.Text className="project-text lh-lg">
          <i className="fs-6 mb-2 project-time">{project.time_period}</i> <br />
          {project.tech_stack.map((tech) => (
            <SkillLabel key={tech} skillName={tech} />
          ))}
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
