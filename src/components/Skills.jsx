import React, { useState } from "react";

const skillsList = [
  { name: "JavaScript", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "SQL", category: "Database" },
  { name: "Python", category: "Backend" },
  { name: "Firebase", category: "Database" }
];

const Skills = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const filteredSkills = skillsList.filter(skill =>
    skill.name.toLowerCase().includes(search.toLowerCase()) &&
    (filter === "" || skill.category === filter)
  );

  return (
    <div className="skills-container">
      <h2>Skills</h2>
      
      <input
        type="text"
        placeholder="Search skills..."
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      <select onChange={(e) => setFilter(e.target.value)} className="filter-dropdown">
        <option value="">All Categories</option>
        <option value="Frontend">Frontend</option>
        <option value="Backend">Backend</option>
        <option value="Database">Database</option>
      </select>

      <ul className="skills-list">
        {filteredSkills.map(skill => (
          <li key={skill.name} className="skill-item">
            {skill.name} <span className="skill-category">({skill.category})</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
