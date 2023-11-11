import "../styles/languages.scss";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiVitess,
  SiMysql,
  SiPostgresql,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiSpring,
} from "react-icons/si";
import { FaJava, FaDatabase } from "react-icons/fa6";
import { TbApi } from "react-icons/tb";

const languages = [
  {
    logo: <SiJavascript />,
    name: "JavaScript",
  },
  {
    logo: <SiTypescript />,
    name: "TypeScript",
  },
  {
    logo: <SiReact />,
    name: "React",
  },
  {
    logo: <SiNextdotjs />,
    name: "NextJs",
  },
  {
    logo: <SiVitess />,
    name: "Vite",
  },
  {
    logo: <SiMysql />,
    name: "MySQL",
  },
  {
    logo: <SiPostgresql />,
    name: "PostgreSQL",
  },
  {
    logo: <SiNodedotjs />,
    name: "NodeJs",
  },
  {
    logo: <SiExpress />,
    name: "ExpressJs",
  },
  {
    logo: <SiNestjs />,
    name: "NestJs",
  },
  {
    logo: <FaJava />,
    name: "Java",
  },
  {
    logo: <SiSpring />,
    name: "Spring",
  },
  {
    logo: <FaDatabase />,
    name: "Databases",
  },
  {
    logo: <TbApi />,
    name: "APIs",
  },
];

export const Languages = () => {
  const [isInview, setIsInview] = useState(false);


  return (
    <section name='languages' className='languages'>
      <motion.ul
        onViewportEnter={() => setIsInview(true)}
      >
        {languages.map((language, index) => (
          <motion.li
            initial={{ x: -100, opacity: 0 }}
            animate={isInview ? { x: 0, opacity: 1 } : { x: -100, opacity: 0 }}
            transition={{ duration: 0.5, delay: index / 8 }}
            key={index}
          >
            <span>{language.logo}</span>
            {language.name}
          </motion.li>
        ))}
      </motion.ul>
      <motion.hr
        whileInView={{ scale: [1, 1.2, 1], transition: { duration: 2 } }}
      />
      <motion.h3
        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.5 } }}
        initial={{ opacity: 0, x: -100 }}
        className='title'
      >
        Developer stacks
      </motion.h3>
    </section>
  );
};
