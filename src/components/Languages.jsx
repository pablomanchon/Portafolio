import "../styles/languages.scss";
import javaLogo from "/src/assets/logos-lenguajes/java-logo.png";
import reactLogo from "/src/assets/logos-lenguajes/react-logo.png";
import viteLogo from "/src/assets/logos-lenguajes/vite-logo.png";
import javaScrpitLogo from "/src/assets/logos-lenguajes/javaScript-logo.png";
import sqlLogo from "/src/assets/logos-lenguajes/sql-logo.png";
import springLogo from "/src/assets/logos-lenguajes/spring-logo.png";
import apiLogo from "/src/assets/logos-lenguajes/api-logo.png";
import { AnimatePresence, motion } from "framer-motion";
import javascriptLogo from "/src/assets/logos-lenguajes/javaScript-logo.png";
import { useState } from "react";
import { Element } from "react-scroll";

export const Languages = () => {
  const [isInview, setIsInview] = useState(false);

  const languages = [
    {
      logo: reactLogo,
      name: "React",
    },
    {
      logo: viteLogo,
      name: "Vite",
    },
    {
      logo: sqlLogo,
      name: "SQL",
    },
    {
      logo: javascriptLogo,
      name: "JavaScript",
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
      logo: apiLogo,
      name: "APIseae",
    },
  ];

  return (
    <motion.Element
      name='languages'
      onViewportEnter={() => setIsInview(true)}
      onViewportLeave={() => setIsInview(false)}
      className='languages'>
      <ul>
        <AnimatePresence mode='sync'>
          {isInview &&
            languages.map((language, key) => (
              <motion.li
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                key={key}>
                <img className='logo' src={language.logo} />
                <span>{language.name}</span>
              </motion.li>
            ))}
        </AnimatePresence>
      </ul>
      <hr />
      <motion.h3
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -200 }}
        className='title'>
        Developer stacks
      </motion.h3>
    </motion.Element>
  );
};
