"use client";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./skillCard.css";
import projects from "@/data/projects.json";
import { useRef } from "react";

const SkillCard = ({ skill }) => {
  const skillCard = useRef(null);
  const skillLogoRef = useRef(null);
  const skillTitleRef = useRef(null);
  const skillRelatedProjectsRef = useRef(null);
  //console.log(typeof projects);
  const relatedProjects = projects.filter((project) =>
    project.tech_stack.includes(skill.skill_name)
  );
  const clickHandler = (e) => {
    const button = e.target;
    if (skillCard.current) skillCard.current.classList.toggle("bg-dots");
    if (skillLogoRef.current) skillLogoRef.current.classList.toggle("hidden");
    if (skillTitleRef.current) skillTitleRef.current.classList.toggle("hidden");
    if (skillRelatedProjectsRef.current)
      skillRelatedProjectsRef.current.classList.toggle("hidden");

    button.innerHTML =
      button.innerHTML === "Related Projects" ? "Back" : "Related Projects";
  };
  return (
    <Card className="m-3 p-2 bg-dots" ref={skillCard}>
      <div
        className="w-100 ratio ratio-1x1"
        id={`skill_${skill.skill_no}_logo`}
        ref={skillLogoRef}
      >
        <Card.Img variant="top" src={skill.logo_Url} alt={skill.skill_name} />
      </div>
      <Card.Body>
        <Card.Title id={`skill_${skill.skill_no}_title`} ref={skillTitleRef}>
          <strong>{skill.skill_name}</strong>
        </Card.Title>
        <Card.Text
          className="hidden bg-white"
          id={`skill_${skill.skill_no}_related_projects`}
          ref={skillRelatedProjectsRef}
        >
          <strong>Related Projects</strong>
          {relatedProjects.map((project) => (
            <li key={project.project_id}>{project.project_name}</li>
          ))}
        </Card.Text>
        <Button variant="primary" onClick={clickHandler}>
          Related Projects
        </Button>
      </Card.Body>
    </Card>
  );
};

export default SkillCard;
