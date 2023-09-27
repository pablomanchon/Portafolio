import "../styles/languages.scss";
import javaLogo from "/src/assets/logos-lenguajes/java-logo.png";
import reactLogo from "/src/assets/logos-lenguajes/react-logo.png";
import viteLogo from "/src/assets/logos-lenguajes/vite-logo.png";
import sqlLogo from "/src/assets/logos-lenguajes/sql-logo.png";
import springLogo from "/src/assets/logos-lenguajes/spring-logo.png";
import apiLogo from "/src/assets/logos-lenguajes/api-logo.png";
import { AnimatePresence, motion } from "framer-motion";

export const Languages = () => {
  return (
    <div className='languages'>
      <ul>
        <AnimatePresence>
          <li>
            <img className='logo' src={reactLogo} />
            <span>React</span>
          </li>
          <li>
            <img className='logo' src={viteLogo} />
            <span>Vite</span>
          </li>
          <li>
            <img className='logo' src={sqlLogo} />
            <span>SQL</span>
          </li>
          <li>
            <img className='logo' src={javaLogo} />
            <span>JavaScript</span>
          </li>
          <li>
            <img className='logo' src={javaLogo} />
            <span>Java</span>
          </li>
          <li>
            <img className='logo' src={springLogo} />
            <span>Spring</span>
          </li>
          <li>
            <img className='logo' src={apiLogo} />
            <span>APIs</span>
          </li>
        </AnimatePresence>
      </ul>
      <hr />
      <motion.h3
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -200 }}
        className='title'>
        Developer stacks
      </motion.h3>
    </div>
  );
};
