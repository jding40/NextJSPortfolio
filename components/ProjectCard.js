"use client";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./ProjectCard.css";
import useEqualHeight from "@/hooks/useEqualHeight";
import SkillLabel from "./SkillLabel";
import { useState } from "react";

// Planning => In Progress => Under Review => Completed

export default function ProjectCard({ project }) {
  useEqualHeight(".project-main");
  useEqualHeight(".project-title");
  useEqualHeight(".project-time");
  useEqualHeight(".project-text");

  const [showDetails, setShowDetails] = useState(false);

  const onClickHandler = () => {
    setShowDetails((showDetails) => !showDetails);
  };

  return (
    <Card className="px-2 mb-4 project-card">
      {!showDetails && (
        <div className="w-100 ratio ratio-16x9 mb-3 project-main">
          <Card.Img
            variant="top"
            src={project.project_image}
            alt={project.project_name}
            className="w-100 ratio ratio-16x9 my-2"
          />
        </div>
      )}

      <Card.Body className="h-100 d-flex flex-column justify-content-between">
        <div className="mb-auto">
          {showDetails && (
            <Card.Text className="lh-lg project-main">
              <strong>Details: </strong>
              <br />
              {project.desc.map((ele, index) => (
                <li key={index}>{ele}</li>
              ))}
              <strong>Libraries: </strong>
              <br />
              {project.libraries.map((lib, index) => (
                <SkillLabel key={index} skillName={lib} />
              ))}
            </Card.Text>
          )}
        </div>
        <div>
          <Card.Title className="project-title">
            <strong>{project.project_name}</strong>
          </Card.Title>
          <Card.Text className="project-text lh-lg">
            <i className="fs-6 mb-2 project-time">{project.time_period}</i>{" "}
            <br />
            {project.tech_stack.map((tech) => (
              <SkillLabel key={tech} skillName={tech} />
            ))}
          </Card.Text>
          <div>
            <Button
              variant="primary"
              className={`me-2 px-${showDetails ? 2.5 : 1}`}
              onClick={onClickHandler}
            >
              {showDetails ? "Back" : "Details"}
            </Button>
            {project.deployment && (
              <a href={project.deployment} target="_blank">
                <Button className="mx-2" variant="primary">
                  Deployment
                </Button>
              </a>
            )}
            {project.sourceCode && (
              <a href={project.sourceCode} target="_blank">
                <Button variant="primary">Source Code</Button>
              </a>
            )}
          </div>
        </div>
      </Card.Body>
    </Card>
  );
}
