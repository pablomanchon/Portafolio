import { useState } from "react";
import { motion } from "framer-motion";
const esPar = (num) => {
  return num % 2 === 0;
};

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
      className={esPar(index) ? "card" : "card invert"}>
      <div className='name-description'>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
      </div>
      <hr />
      <a className='project' href={project.url}>
        <img src={project.image} alt={project.name} />
      </a>
    </motion.div>
  );
};
