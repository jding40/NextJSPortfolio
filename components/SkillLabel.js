import React from "react";
import hash from "hash-it";

const SkillLabel = ({ skillName }) => {
  const themeList = [
    "bg-secondary-subtle",
    "bg-primary-subtle",
    "bg-info-subtle",
    "bg-success-subtle",
    "bg-warning-subtle",
    "bg-danger-subtle",
  ];
  const hashValue = hash(skillName) % 6;
  return (
    <span className={`${themeList[hashValue]} mx-1 p-1 rounded-pill`}>
      {skillName}
    </span>
  );
};

export default SkillLabel;
