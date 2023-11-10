import "../styles/languages.scss";
import javaLogo from "/src/assets/logos-lenguajes/java-logo.webp";
import reactLogo from "/src/assets/logos-lenguajes/react-logo.webp";
import viteLogo from "/src/assets/logos-lenguajes/vite-logo.webp";
import mySQLlogo from "/src/assets/logos-lenguajes/mysql-logo.webp";
import springLogo from "/src/assets/logos-lenguajes/spring-logo.webp";
import apiLogo from "/src/assets/logos-lenguajes/api-logo.webp";
import javascriptLogo from "/src/assets/logos-lenguajes/javaScript-logo.webp";
import postgreLogo from "/src/assets/logos-lenguajes/postgre-logo.webp";
import nodeJsLogo from "/src/assets/logos-lenguajes/node-logo.webp";
import nestJsLogo from "/src/assets/logos-lenguajes/nest-logo.webp";
import typeScriptLogo from "/src/assets/logos-lenguajes/typescript-logo.webp";
import databasesLogo from "/src/assets/logos-lenguajes/databases-logo.webp";
import nextJsLogo from "/src/assets/logos-lenguajes/nextjs-logo.webp";
import expressJsLogo from "/src/assets/logos-lenguajes/express.webp";
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

export const Languages = () => {
  const [isInview, setIsInview] = useState(false);

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

  return (
    <section name='languages' className='languages'>
      <motion.ul
        onViewportEnter={() => setIsInview(true)}
        onViewportLeave={() => setIsInview(false)}
      >
        {/*  {languages.map(
          (language, index) =>
            isInview && (
              <motion.li
                key={index}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                }}
                transition={{ duration: 0.5 }}
              >
                <img
                  className='logo'
                  src={language.logo}
                  alt={`${language.name}-img`}
                />
                <motion.span
                  animate={{
                    rotate: [0, -10, 10, 0],
                  }}
                  transition={{ duration: 0.5, delay: index / 8 }}
                >
                  {language.name}
                </motion.span>
              </motion.li>
            )
        )} */}
        {languages.map((language, index) => (
          <motion.li
            animate={isInview ? { scale: 1 } : { scale: 2 }}
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
