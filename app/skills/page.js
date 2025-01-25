"use client";
import { useState, useEffect, useRef } from "react";
import skills from "@/data/skills.json";
import SkillCard from "@/components/SkillCard";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function SkillsPage() {
  const [visibleWebSkills, setVisibleWebSkills] = useState([]);
  const [visibleOtherSkills, setVisibleOtherSkills] = useState([]);
  const skillRefs = useRef([]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < skills.length) {
        const skill = skills[index];
        if (skill && skill.type === "Web Development") {
          // 确保 skill 存在
          setVisibleWebSkills((prevSkills) => [...prevSkills, skill]);
        }
        if (skill && skill.type === "Other IT Skills") {
          // 确保 skill 存在
          setVisibleOtherSkills((prevSkills) => [...prevSkills, skill]);
        }
        index++;
      } else {
        clearInterval(interval);
      }
    }, 400);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (visibleWebSkills.length > 0) {
      skillRefs.current[visibleWebSkills.length - 1].scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [visibleWebSkills]);

  useEffect(() => {
    if (visibleOtherSkills.length > 0) {
      skillRefs.current[visibleOtherSkills.length - 1].scrollIntoView({
        behavior: "smooth",
      });
    }
  }, [visibleOtherSkills]);

  return (
    <>
      <Container fluid="md">
        <h1 className="my-5">Web Development Skills</h1>
        <Row>
          {visibleWebSkills.map((skill, index) => {
            return (
              <Col
                xs={12}
                md={6}
                lg={4}
                xl={2}
                key={skill.skill_no}
                ref={(el) => (skillRefs.current[index] = el)}
              >
                <SkillCard skill={skill} />
              </Col>
            );
          })}
        </Row>
      </Container>

      <Container fluid="md">
        <h1 className="my-5">Other IT Skills</h1>
        <Row>
          {visibleOtherSkills.map((skill, index) => {
            return (
              <Col
                xs={12}
                md={6}
                lg={4}
                xl={2}
                key={skill.skill_no}
                ref={(el) => (skillRefs.current[index] = el)}
              >
                <SkillCard skill={skill} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </>
  );
}

export default SkillsPage;
