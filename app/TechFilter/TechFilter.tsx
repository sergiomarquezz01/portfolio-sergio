"use client";
import { useState } from "react";
import styles from "./TechFilter.module.css";

const CATEGORIES = [
  { id: "ALL", label: "Todas" },
  { id: "AI", label: "IA & Big Data" },
  { id: "FRONTEND", label: "Frontend & Mobile" },
  { id: "BACKEND", label: "Backend & DB" },
  { id: "DEVOPS", label: "DevOps & Tools" }
];

const SKILL_MAP = [
  { name: "Python", cat: "AI" },
  { name: "PySpark", cat: "AI" },
  { name: "scikit-learn", cat: "AI" },
  { name: "pandas / NumPy", cat: "AI" },
  { name: "Machine Learning", cat: "AI" },
  { name: "JavaScript", cat: "FRONTEND" },
  { name: "React", cat: "FRONTEND" },
  { name: "Flutter / Dart", cat: "FRONTEND" },
  { name: "HTML5 / CSS3", cat: "FRONTEND" },
  { name: "Node.js", cat: "BACKEND" },
  { name: "Java", cat: "BACKEND" },
  { name: "C++ / PHP", cat: "BACKEND" },
  { name: "SQL (MySQL, PostgreSQL)", cat: "BACKEND" },
  { name: "NoSQL (MongoDB)", cat: "BACKEND" },
  { name: "Git / GitHub / GitLab", cat: "DEVOPS" },
  { name: "VS Code / Jupyter", cat: "DEVOPS" },
  { name: "Scrum / Kanban", cat: "DEVOPS" }
];

export default function TechFilter() {
  const [activeCategory, setActiveCategory] = useState("ALL");

  return (
    <div className={styles.container}>
      <div className={styles.buttonGroup}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`${styles.filterBtn} ${activeCategory === cat.id ? styles.activeBtn : ""}`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
        {SKILL_MAP.map((skill, index) => {
          const isHighlighted = activeCategory === "ALL" || skill.cat === activeCategory;
          return (
            <span
              key={index}
              className={`${styles.badge} ${isHighlighted ? styles.badgeHighlight : ""}`}
              style={{ opacity: isHighlighted ? 1 : 0.3 }}
            >
              {skill.name}
            </span>
          );
        })}
      </div>
    </div>
  );
}