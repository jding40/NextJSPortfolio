import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import "./skillCard.css";
import projects from "@/data/projects.json";

const SkillCard = ({ skill }) => {
  //console.log(typeof projects);
  const relatedProjects = projects.filter((project) =>
    project.tech_stack.includes(skill.skill_name)
  );
  const clickHandler = (e) => {
    const button = e.target;
    document
      .getElementById(`skill_${skill.skill_no}_logo`)
      .classList.toggle("hidden");
    document
      .getElementById(`skill_${skill.skill_no}_title`)
      .classList.toggle("hidden");
    document
      .getElementById(`skill_${skill.skill_no}_related_projects`)
      .classList.toggle("hidden");
    button.innerHTML =
      button.innerHTML === "Related Projects" ? "Back" : "Related Projects";
  };
  return (
    <Card className="m-3 p-2 ">
      <div
        className="w-100 ratio ratio-1x1"
        id={`skill_${skill.skill_no}_logo`}
      >
        <Card.Img variant="top" src={skill.logo_Url} alt={skill.skill_name} />
      </div>
      <Card.Body>
        <Card.Title id={`skill_${skill.skill_no}_title`}>
          {skill.skill_name}
        </Card.Title>
        <Card.Text
          className="hidden"
          id={`skill_${skill.skill_no}_related_projects`}
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
