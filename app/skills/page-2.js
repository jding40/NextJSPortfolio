// Hydration failed because the server rendered HTML didn't match the client.
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import skills from "@/data/skills.json";
import SkillCard from "@/components/SkillCard";

function SkillsPage() {
  const webSkills = skills.filter((skill) => skill.type === "Web Development");
  const otherSkills = skills.filter(
    (skill) => skill.type !== "Web Development"
  );

  return (
    <Container className="border border-2 container-xxl">
      <h1 className="my-5">Web Development Skills</h1>
      <Row>
        {webSkills.map((skill, index) => {
          return (
            <Col xs={12} md={6} lg={3} xl={2} key={skill.skill_no}>
              <SkillCard skill={skill} />
            </Col>
          );
        })}
      </Row>

      <h1 className="my-5">Other IT Skills</h1>
      <Row>
        {otherSkills.map((skill, index) => {
          return (
            <Col xs={12} md={6} lg={4} xl={2} key={skill.skill_no}>
              <SkillCard skill={skill} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default SkillsPage;
