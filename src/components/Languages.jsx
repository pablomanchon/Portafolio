import "../styles/languages.scss";
import javaLogo from "/src/assets/logos-lenguajes/java-logo.png";
import reactLogo from "/src/assets/logos-lenguajes/react-logo.png";
import viteLogo from "/src/assets/logos-lenguajes/vite-logo.png";
import mySQLlogo from "/src/assets/logos-lenguajes/mysql-logo.png";
import springLogo from "/src/assets/logos-lenguajes/spring-logo.png";
import apiLogo from "/src/assets/logos-lenguajes/api-logo.png";
import javascriptLogo from "/src/assets/logos-lenguajes/javaScript-logo.png";
import postgreLogo from "/src/assets/logos-lenguajes/postgre-logo.png";
import nodeJsLogo from "/src/assets/logos-lenguajes/node-logo.png";
import nestJsLogo from "/src/assets/logos-lenguajes/nest-logo.png";
import typeScriptLogo from "/src/assets/logos-lenguajes/typescript-logo.png";
import databasesLogo from "/src/assets/logos-lenguajes/databases-logo.png";
import { useState } from "react";
import { motion } from "framer-motion";

export const Languages = () => {
  const [isInview, setIsInview] = useState(false);

  const languages = [
    {
      logo: javascriptLogo,
      name: "JavaScript",
    },
    {
      logo: typeScriptLogo,
      name: "TypeScript",
    },
    {
      logo: reactLogo,
      name: "React",
    },
    {
      logo: viteLogo,
      name: "Vite",
    },
    {
      logo: mySQLlogo,
      name: "MySQL",
    },
    {
      logo: postgreLogo,
      name: "PostgreSQL",
    },
    {
      logo: nodeJsLogo,
      name: "NodeJs",
    },
    {
      logo: nestJsLogo,
      name: "NestJs",
    },
    {
      logo: javaLogo,
      name: "Java",
    },
    {
      logo: springLogo,
      name: "Spring",
    },
    {
      logo: databasesLogo,
      name: "Databases",
    },
    {
      logo: apiLogo,
      name: "APIs",
    },
  ];

  return (
    <section name='languages' className='languages'>
      <motion.ul
        onViewportEnter={() => setIsInview(true)}
        onViewportLeave={() => setIsInview(false)}
      >
        {languages.map(
          (language, index) =>
            isInview && (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: -20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                transition={{ duration: 0.5, delay: index / 8 }}
              >
                <img className='logo' src={language.logo} alt={language.name} />
                <span>{language.name}</span>
              </motion.li>
            )
        )}
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
