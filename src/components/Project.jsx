import { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaGlobe } from "react-icons/fa"; // 👈 íconos de GitHub y Web

const esPar = (num) => num % 2 === 0;

export const Project = ({ project, index }) => {
  const [isInView, setIsInView] = useState(false);

  return (
    <motion.div
      onViewportEnter={() => setIsInView(true)}
      onViewportLeave={() => setIsInView(false)}
      animate={
        isInView
          ? { x: 0, opacity: 1, transition: { duration: 0.5, delay: 0.2 } }
          : { x: esPar(index) ? -100 : 100, opacity: 0 }
      }
      className={esPar(index) ? "card" : "card invert"}
    >
      <div className="name-description">
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </div>
      <hr />

      <div className="preview">
        {/* Imagen siempre visible */}
        <img src={project.image} alt={project.name} className="project-image" />

        {/* Íconos de acciones */}
        <div className="links">
          {project.url && (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="web-link"
              title="Ver demo"
            >
              <FaGlobe size={26} />
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="github-link"
              title="Ver en GitHub"
            >
              <FaGithub size={26} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};
