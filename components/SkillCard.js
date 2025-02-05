"use client";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
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

  // useEqualHeight(".skillCard");
  // useEqualHeight(".card");

  return (
    <Card className="my-2 px-1 py-1 bg-dots skillCard" ref={skillCard}>
      <div
        className="w-100 ratio ratio-1x1"
        id={`skill_${skill.skill_no}_logo`}
        ref={skillLogoRef}
      >
        <Card.Img variant="top" src={skill.logo_Url} alt={skill.skill_name} />
      </div>
      <Card.Body
        ref={cardBody}
        className="d-flex flex-column justify-content-end "
      >
        <Card.Text
          className="hidden  flex-auto "
          id={`skill_${skill.skill_no}_related_projects`}
          ref={skillRelatedProjectsRef}
        >
          {relatedProjects.map((project) =>
            project.deployment ? (
              <li key={project.project_id}>
                <a href={project.deployment}>{project.project_name}</a>
              </li>
            ) : (
              <li key={project.project_id}>{project.project_name}</li>
            )
          )}
        </Card.Text>
        <Card.Title
          className="fs-6 flex-0"
          id={`skill_${skill.skill_no}_title`}
          ref={skillTitleRef}
        >
          <strong>{skill.skill_name}</strong>
        </Card.Title>
        <Button
          variant="primary"
          onClick={clickHandler}
          className="fs-10 px-1 flex-0"
        >
          Related Projects
        </Button>
      </Card.Body>
    </Card>
  );
};

export default SkillCard;
