import React, { useState } from "react";

const allSkills = [
  { name: "Java", category: "Backend" },
  { name: "SQL", category: "Database" },
  { name: "JUnit Testing", category: "Testing" },
  { name: "React", category: "Frontend" },
  { name: "Firebase", category: "Backend" },
  { name: "Node.js", category: "Backend" },
  { name: "Figma", category: "Tools" },
  { name: "CSS", category: "Frontend" },
];

const categories = ["Frontend", "Backend", "Database", "Testing", "Tools"];

const Skills = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCheckboxChange = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const filteredSkills = allSkills.filter((skill) => {
    const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategories.length === 0 || selectedCategories.includes(skill.category);
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="container">
      <h2>Skills</h2>

      <input
        type="text"
        placeholder="Search skills..."
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <div style={{ margin: "15px 0" }}>
        {categories.map((category) => (
          <label key={category} style={{ marginRight: "10px" }}>
            <input
              type="checkbox"
              checked={selectedCategories.includes(category)}
              onChange={() => handleCheckboxChange(category)}
            />
            {` ${category}`}
          </label>
        ))}
      </div>

      <div className="skills-grid">
        {filteredSkills.map((skill, index) => (
          <div className="skill-card" key={index}>
            {skill.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
