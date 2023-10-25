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
